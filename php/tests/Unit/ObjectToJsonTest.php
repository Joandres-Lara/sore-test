<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use Solution\Classes\ObjectToJson;

class ObjectToJsonTest extends TestCase{
 /**
  *
  * @return void
  */
 public function testShouldConvertToJson(){
  $this->assertJsonStringEqualsJsonString('{"key": "value"}',(new ObjectToJson(['key' => 'value']))->toJson());
 }
 /**
  *
  * @depends testShouldConvertToJson
  * @return void
  */
 public function testShouldBeObjectToJsonInstance(){
  $this->assertTrue(($result = ObjectToJson::parse('{"key":"value"}')) instanceof ObjectToJson);
  $this->assertSame("value", $result['key']);
 }
 /**
  *
  * @depends testShouldBeObjectToJsonInstance
  * @return void
  */
 public function testShouldSumValuesOfArray(){
  $arr = [
   3, 4, 5, 6, 'six' => 100, 'this_value_can_not_be_sum',
   'array_with_mixed_values' => [
    1, 2, 23, 3, 0
   ]
  ];

  $this->assertSame(147, (new ObjectToJson($arr))->sumValuesNumberType());
 }
}
