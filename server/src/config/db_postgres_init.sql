CREATE TABLE public.users
(
  user_id SERIAL NOT NULL,
  passwd character varying(200) NOT NULL,
  email character varying(100) NOT NULL,
  fullname character varying(200),
  username character varying(100),
  google_id character varying(100),
  created_at timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
)

CREATE TABLE public.resetTokens
(
    id SERIAL NOT NULL,
    email character varying NOT NULL,
    token character varying NOT NULL,
    used boolean DEFAULT false NOT NULL,
    expiration timestamp(0) with time zone,
    PRIMARY KEY (id)
);

CREATE TABLE public.events
(
  event_id SERIAL NOT NULL,
  event_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
  event_time timestamp(0) with time zone NOT NULL,
  event_description text,
  price real NOT NULL,
  owner_id integer NOT NULL,
  created_at timestamp(0) with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (event_id),
)

CREATE TABLE public.event_attendants
(
    user_id integer NOT NULL,
    event_id integer NOT NULL,
    created_at timestamp(0) with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, event_id)
)

ALTER TABLE public.events 
  ADD FOREIGN KEY (owner_id)
  REFERENCES public.users (user_id)
  ON UPDATE CASCADE
  ON DELETE NO ACTION
  NOT VALID;

ALTER TABLE public.event_attendants
  ADD FOREIGN KEY (event_id)  
  REFERENCES public.events (event_id)
  ON UPDATE CASCADE
  ON DELETE NO ACTION
  NOT VALID;

ALTER TABLE public.event_attendants
  ADD FOREIGN KEY (user_id)  
  REFERENCES public.users (user_id) 
  ON UPDATE CASCADE
  ON DELETE NO ACTION
  NOT VALID;

INSERT INTO public.users (email, passwd) VALUES ('test1@example.com', 'test123');
INSERT INTO public.users (email, passwd) VALUES ('test2@example.com', 'test123');
INSERT INTO public.users (email, passwd) VALUES ('test2@example.com', 'test123');

INSERT INTO public.events (event_name, event_time, event_description, price, owner_id) VALUES ('Event 1', '2023-11-03 14:00:00', 'Description for Event 1', 50.00, 1);
INSERT INTO public.events (event_name, event_time, event_description, price, owner_id) VALUES ('Event 2', '2023-11-04 15:30:00', 'Description for Event 2', 30.00, 2);
INSERT INTO public.events (event_name, event_time, event_description, price, owner_id) VALUES ('Event 3', '2023-11-05 19:00:00', 'Description for Event 3', 25.00, 3);