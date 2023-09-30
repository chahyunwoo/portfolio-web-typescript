import emailjs from "@emailjs/browser";

const isDefined = (val: string | undefined): val is string => val !== undefined;

const initEmailJs = () => {
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  if (isDefined(userId)) {
    emailjs.init(userId);
  } else {
    throw new Error("NEXT_PUBLIC_EMAILJS_USER_ID is undefined");
  }
};

export default initEmailJs;
