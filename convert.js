let calc = document.getElementById("calculate");

calc.onclick = function () {
    let input_type = document.getElementsByClassName("t")[0].value;
    let output_type = document.getElementsByClassName("t")[1].value;
    var n1 = document.getElementById("first").value;

      if (input_type == 2) {
        n1 = parseInt(n1, 2);
      } else if (input_type == 8) {
        n1 = parseInt(n1, 8);
      } else if (input_type == 10) {
        n1 = parseInt(n1, 10);

      } else if (input_type == 16) {
        n1 = parseInt(n1, 16);

      }
  
      /************************************************************  Output  *********************************************************/
  
      let ans = n1;
      let final_output;
      if (output_type == 2) {
        final_output = ans.toString(2);
      } else if (output_type == 8) {
        final_output = ans.toString(8);
      } else if (output_type == 10) {
        final_output = ans.toString(10);
      } else if (output_type == 16) {
        final_output = ans.toString(16);
      }
  
      document.getElementById("output").value = final_output;
    
  };