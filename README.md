# Logbook

A simple library with no dependencies, which uses console.log but better looks and functionality in a simple API

![Logbook](http://i63.tinypic.com/sev9tg.jpg)

## Installation

Just install the dependency and start using

```javascript
npm i @vacom/logbook or yarn add @vacom/logbook
```

### How to import

After installing the dependency, just import the components you need

```javascript
import Log from "@vacom/logbook";
```

## Usage

```jsx
import Log from "@vacom/logbook";

//Simple usage
//args: Value
Log.info("Any value, object or data type");

/** STYLES **/
//args: Title, Value, Color
Log.color("title", "value", "#2274A5");

/** STATES **/
//args: Value
Log.warn("This is a warning");
Log.error("This is a error");
Log.success("This is a success");
Log.time("This is a time log");

/** DATA **/
//Table
//args: Value: Array
Log.table([{ id: 1, name: "john" }, { id: 2, name: "Jack" }]);

//Simple Group
Log.group
  .title("A group")
  .child("Child")
  .end();

//Nested Group
Log.group
  .title("A group")
  .child("Child")
  .title("Nested group")
  .child("nested child")
  .end()
  .end();

/** SEQUENCE **/

//Trace
//show how the code ended up at a certain point
//args: Value
Log.trace("trace");

//Assert
//args: Condition, Value
//Write a message to the console, only if the first argument is _false_
Log.assert(
  document.getElementById("demo"),
  "You have no element with ID 'demo'"
);

//Count
for (i = 0; i < 10; i++) {
  Log.count();
}

/** UTILITIES **/
Log.clear(); //Clears everything in the console
```

## License

MIT © [vacom](https://github.com/vacom)
