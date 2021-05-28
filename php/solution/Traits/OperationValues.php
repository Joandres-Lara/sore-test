<?php

namespace Solution\Traits;

trait OperationValues{
 /**
  *
  */
 public static function reduceNumberValues(array $values){
  return array_reduce($values, function($first, $curr){
   return is_numeric($curr) ? $first + $curr : (
    is_array($curr) ? $first + static::reduceNumberValues($curr) : $first
   );
  }, 0);
 }
 /**
  *
  * @return int|float
  */
 public function sumValuesNumberType(){
  return static::reduceNumberValues($this->value);
 }
}
