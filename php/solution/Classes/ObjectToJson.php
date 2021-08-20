<?php

namespace Solution\Classes;

use ArrayAccess;
use Solution\Interfaces\Jsonable;
use Solution\Traits\OperationValues;

class ObjectToJson implements Jsonable, ArrayAccess{
 use OperationValues;

 protected $value;

 public static function parse(string $json) : ObjectToJson{
  // Esto sólo es un ejemplo
  return new ObjectToJson([$string => $value]);
 }

 public function __construct(array $value){
  $this->value = $value;
 }

 public function toJson() : string {
  return '';
 }

 public function offsetExists($offset){

 }

 public function offsetGet($offset){

 }

 public function offsetSet($offset, $value){

 }

 public function offsetUnset($offset){

 }
};
