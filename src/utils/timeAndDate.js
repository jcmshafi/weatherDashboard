const getFormattedTimeAndDate = (value, type, inMS) => {
  //type pass na hoy tobe jeta ache seteai return korbe
  if (!type) return value;

  //jodi time ta mili seconds na hoy
  if (!inMS) {
    value = value * 1000;
  }

  const date = new Date(value);

  let option;

  if (type === "date") {
    option = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    option = {
      hour: "numeric",
      minute: "numeric",
    };
  }
  return new Intl.DateTimeFormat("en-us", option).format(value);
};

export { getFormattedTimeAndDate };
