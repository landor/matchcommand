#!/usr/bin/php
<?php

function logmsg($msg) {
  $msg = '[' . date('Y-m-d H:i:s') . ' - ' . getmypid() . '] ' . $msg . "\n";
  // file_put_contents (__DIR__ . '/log.txt', $msg, FILE_APPEND);
}


logmsg('start');

$stdin = fopen('php://stdin', 'b');
$stdout = fopen('php://stdout', 'b');
stream_set_blocking($stdin, 0);

$autodestruct = 10000;
do {

  $request = fgets($stdin);
  if (! empty($request)) {

    $request = substr($request, 4);

    logmsg('request msg: ' . $request);

    $request = json_decode($request);

    $cmd = 'subl ' . $request->filename . ':' . $request->linenumber;
    logmsg($cmd);
    exec($cmd);

    $response = json_encode(array(
      'response'=>'success',
    ));

    $response_pack = pack('I', strlen($response));
    logmsg('response: ' . $response);

    fwrite($stdout, $response_pack . $response);
  }

  usleep(10000);
} while ($autodestruct-- > 0);


logmsg('end');
