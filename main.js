#!/usr/bin/node
import { node, linkedList } from "./app.js";

const list = linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("zero");

console.log(list.toString());
console.log("Size:", list.size());
