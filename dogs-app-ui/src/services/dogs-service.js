import { useState } from "react";
import http from "./axios-common";

export function getAllDogs() {
  return http.get("/alldogs");
}

export function getOwnerID(id) {
  return http.get("/getOwner/id/" + id);
}
export function getNumberOfDogs() {
  return http.get("/numdogs");
}
