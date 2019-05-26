const table = (value = "The value parameter is missing") =>
  console.table(value);

const warn = (value = "The value parameter is missing") => console.warn(value);

const error = (value = "The value parameter is missing") =>
  console.error(value);

const success = (value = "The value parameter is missing", color = "#5BFF9E") =>
  console.log(`%c ${value} `, `color: #174028; background-color: ${color}`);

const color = (
  title = "The title parameter is missing",
  value = "The value parameter is missing",
  color = "#2274A5"
) =>
  console.log(
    `%c ${title} `,
    `color: white; background-color: ${color}`,
    value
  );

const time = (value = "The value parameter is missing") => {
  const d = new Date();
  return color(`Time: ${d.getHours()}:${d.getMinutes()}`, value, "#313A87");
};

const trace = (value = "The value parameter is missing") =>
  console.trace(value);

const assert = (
  condition = "The condition parameter is missing",
  value = "The value parameter is missing"
) => console.assert(condition, value);

class Group {
  title(value = "The title value parameter is missing") {
    console.group(value);
    return this;
  }
  child(value = "The child value parameter is missing") {
    console.log(value);
    return this;
  }
  end() {
    return console.groupEnd();
  }
}

const clear = () => console.clear();
const count = () => console.count();
const info = (value = "The value parameter is missing") => console.log(value);

const Log = {
  table,
  group: new Group(),
  warn,
  error,
  success,
  color,
  trace,
  assert,
  clear,
  count,
  info,
  time
};

export default Log;
