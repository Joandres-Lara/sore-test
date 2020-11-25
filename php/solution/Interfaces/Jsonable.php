<?php

namespace Solution\Interfaces;

interface Jsonable{
 /**
  * Convierte el string en un object
  */
 public static function parse(string $json) : object;
 /**
  * Convierte el objeto en un json
  */
 public function toJson() : string;
}
