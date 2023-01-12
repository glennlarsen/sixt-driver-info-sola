import * as yup from "yup";
import {
  EMAIL_REGEX,
  MAX_PHONE_NUMBERS,
  MIN_PHONE_NUMBERS,
} from "constants/validationRules";

const schema = yup.object().shape({
  country: yup.string().nullable().transform((v, o) => (o === '' ? null : v)),
  postal: yup.string().nullable().transform((v, o) => (o === '' ? null : v)),
  city: yup.string().nullable().transform((v, o) => (o === '' ? null : v)),
  email: yup
    .string()
    .nullable()
    .transform((v, o) => (o === '' ? null : v))
    .matches(EMAIL_REGEX, "Enter a valid email"),
  tel: yup
    .string()
    .nullable()
    .transform((v, o) => (o === '' ? null : v))
    .max(MAX_PHONE_NUMBERS, "Phone number is to long")
    .min(MIN_PHONE_NUMBERS, "Phone number is to short"),
  street: yup.string().nullable().transform((v, o) => (o === '' ? null : v)),
});

export default schema;
