



function addNum(valor) {
    var $input = document.getElementById('equation');
    $input.value += valor;

}
function addOperator(opera) {
    var $input = document.getElementById('equation');
    $input.value += ' ' + opera + ' ';
}

function del() {
    var $input = document.getElementById('equation');
    $input.value = $input.value.slice(0, -1);
}

function calcul() {
    var $input = document.getElementById('equation');
    try {

        /**
       * We MUST NOT use 'eval', cuz it can be used for 
       * hackers, however this is only CSS/html, enjoy it!
       *  I  recommend to use  Math library: https://mathjs.org
       * :D
       */

      var result = eval($input.value);
      $input.value = result;
    } catch (e) {
      alert('Digite Novamente. ')
      $input.value = '';
    }
  }
  


