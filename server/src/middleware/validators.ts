import { Request, Response, NextFunction } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

interface Validators {
  validate: (
    validationArray: ValidationChain[]
  ) => (
    req: any,
    res: any,
    next: any
  ) => Promise<Response<any, Record<string, any>> | undefined>;
}

const validators: Validators = {
  validate:
    (validationArray: ValidationChain[]) =>
    async (req: Request, res: Response, next: NextFunction) => {
      // const error: AuthErrors = {}
      await Promise.all(
        validationArray.map((validation) => validation.run(req))
      );
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      next();
    },
};

export default validators;
