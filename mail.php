<?php
     try {
   
        
        function mailTo() {
        
             $data = json_decode(file_get_contents("php://input"), true);// обрабодка post json
                $response = '';
                
                /*
                $str = "
                    name: ".$data['name']."
                    massage: ".$data['massage']."
                    name: ".$data['name']."
                ";
                
                   $response = array(
                        "data" =>  $str,
                        "data21" =>  $str,
                        "massage"=> 'входные данные',
                        "status" => 500,
                     );
                     echo json_encode($response);
                         return;
                         */
            // данные точно приходят
    
            // $mail_to = "ivanmart2017@yandex.ru";
            $mail_to = "stsetka@yandex.ru";
            $subject = 'Заявка с сайта - калькулятор забора.';
            
            $name = 'Без имени';
            if(!empty($data['name'])){
                $name = $data['name'];
            }
        
            $phone = '';
            if(!empty($data['phone'])){
                $phone = $data['phone'];
            } else {
                 
                $response = array(
                    "data" => $data,
                    "massage"=> 'Отсутствует номер',
                    "status" => 500,
                 );
                 echo json_encode($response);
                 return;
            }
            
            $massage = 'Без сообщения';
            if(!empty($data['massage'])){
                $massage = $data['massage'];
            }
        
            $calculator_data = '';
            if(!empty($data['calculator_data'])){
                $calculator_data = $data['calculator_data'];
            }
        
            // headers
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=UTF-8';
            $headers[] = '';
            
            /*
                $content_mail = '
                    <div class="_mail">
                        <b>Имя: '.$name.'</b> <br>
                        <b>Телефон: '.$phone.'</b> <br>
                        <b>Сообщение: '.$calculator_data.'</b> <br>
                        <br>
                        <br>
                        '.$calculator_data.'
                    </div>
                ';
               */
                 $content_mail = '
                    <div class="_mail">
                       <b>Имя: '.$name.'</b> <br>
                        <b>Телефон: '.$phone.'</b> <br>
                        <b>Сообщение: '.$massage.'</b> <br>
                    </div>
                ';
               if(mail($mail_to, $subject, $content_mail, implode("\r\n", $headers))) {
                    $response = array(
                    //    "title"  => $data,
                        "massage" => "sending",
                        "status" => 'ok',
                    );
               } else {
                    $response = array(
                      //  "title"  => $data,
                        "massage" => "error sending",
                        "status" => 500,
                    );
               }
    
            echo json_encode($response); 
        
        }
        mailTo();


    } catch (Exception $e) {
        echo $e->getMessage();
         $response = array(
            "massage" => $e->getMessage(),
            "status" => 500,
        );

        echo json_encode( $response );
    }
    
?>