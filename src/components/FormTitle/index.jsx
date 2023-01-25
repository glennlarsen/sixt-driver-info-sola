import {
    SOLA_1,
    SOLA_2,
    SOLA_3,
    SOLA_1_TITLE,
    SOLA_2_TITLE,
    SOLA_3_TITLE,
    UKNOWN_FORM,
  } from "constants/staticInfo";

const FormTitle = (formName) => {
    let title = UKNOWN_FORM;
    switch (formName) {
      case SOLA_1:
        title = SOLA_1_TITLE;
        break;
      case SOLA_2:
        title = SOLA_2_TITLE;
        break;
      case SOLA_3:
        title = SOLA_3_TITLE;
        break;
      default:
        title = UKNOWN_FORM;
    }

  return title;
}

export default FormTitle;