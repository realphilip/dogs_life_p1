import { useState } from 'react';
import http from './axios-common';

export function getAllDogs() {
    return http.get("/alldogs");
}