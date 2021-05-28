<?php

namespace Solution\Classes;

use ArrayAccess;
use Solution\Interfaces\Jsonable;
use Solution\Traits\OperationValues;

class ObjectToJson implements Jsonable, ArrayAccess{
 use OperationValues;
 /**
  *
  * @var array $value
  */
 protected $value;
 /**
  *
  * @param string $json
  * @return \Solution\Classes\ObjectToJson
  */
 public static function parse(string $json) : ObjectToJson{
  // Esto sólo es un ejemplo
  return new ObjectToJson(json_decode($json, true));
 }

 public function __construct(array $value){
  $this->value = $value;
 }

 public function toJson() : string {
  return json_encode($this->value);
 }
 /**
  *
  * @param mixed $offset
  * @return bool
  */
 public function offsetExists($offset){
  return array_key_exists($this->value, $offset);
 }
 /**
  *
  * @param mixed $offset
  * @return mixed
  */
 public function offsetGet($offset){
  return $this->value[$offset] ?? null;
 }
 /**
  *
  * @param mixed $offset
  * @param mixed $value
  * @return mixed
  */
 public function offsetSet($offset, $value){
  return $this->value[$offset] = $value;
 }
 /**
  *
  * @param mixed $offset
  * @return void
  */
 public function offsetUnset($offset){
  unset($this->value[$offset]);
 }
};
