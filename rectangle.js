$(function(){
      var $width = $('#rectangle-width'),
           $height= $('#rectangle-height'),
           $calc= $('#rectangle-calc'),                     
            blnValid = false;
          $calc.click(function() {
                if(!blnValid) return;
              var width  = Number($width.val()),
                   height = Number($height.val()),
                    p = roundFractional(width * 2 + height * 2, 2 ),
                    a= roundFractional(width * height, 2 );
                   // console.log(a,p);
                  $('#rectangle-perimeter').val(p);
                  $('#rectangle-area').val(a);             
        });
       $width.focusout(function() {
                blnValid = validate('#rectangle-width');   
             });
      $height.focusout(function() {
                       blnValid = validate('#rectangle-height');    
           });
      function roundFractional(x, n) {
            return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);  
      }
        /**
         *    * 对字段进行数据合法性校验
         *       *
         *          * @param field 字段的 id
         *             * @returns boolean 验证通过为 true，验证不通过为 false
         *                */
      function validate(field) {
            var $data = $(field),
                    $message = $(field + '-validate'),
                    label = $(field).attr('data-label');

            if($data.val() === '') {
                    $message.html(label + '不能为空！');
                     $data.select();
                    return false;
                                    
            }
      }
});
