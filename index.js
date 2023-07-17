
$(document).ready(function () {

      function smallest(arr) {
            
      }

      let nom = 0, noj = 0;

      $(document).on('click', '#btn1', () => {
            nom = document.getElementById("nom").value;
            noj = document.getElementById("noj").value;
            switch (nom) {
                  case 0:
                  case 1: {
                        console.log("Very Easy Do it your self");
                  }

                  case 2: {
                        console.log("No. Machine are 2");
                  }

                  default: {
                        let machine_job_box = document.getElementById("machine_job_box");
                        if (noj >= 2) {

                              for (let i = 1; i <= nom; i++) {
                                    for (let j = 1; j <= noj; j++) {
                                          let x = document.createElement("input");

                                          x.setAttribute("type", "number");
                                          x.setAttribute("id", `m${i}_j${j}`);

                                          machine_job_box.appendChild(x);
                                    }
                                    machine_job_box.appendChild(document.createElement("br"))
                              }

                              let cnt_btn = document.createElement("input");
                              cnt_btn.setAttribute("type", "button");
                              cnt_btn.setAttribute("value", "Count");
                              cnt_btn.setAttribute("id", "count");

                              machine_job_box.appendChild(cnt_btn);
                        }
                        else {
                              console.log("Atleast two job required to use this algorithm.")
                        }
                  }
            }
      })

      $(document).on('click', '#count', () => {
            let m_arr = new Array();
            // m.push("1");
            // j.push("2");
            for (let i = 1; i <= nom; i++) {
                  let j_arr = new Array();
                  for (let j = 1; j <= noj; j++) {
                        console.log(document.getElementById(`m${i}_j${j}`).value);
                        // j.push(i + j)
                        console.log("number",i,j);
                        
                        j_arr.push(parseInt(document.getElementById(`m${i}_j${j}`).value));
                  }
                  m_arr.push(j_arr)
            }
            console.log(m_arr);
            
            if(m_arr.length > 2){
                  console.log("there are more machine so currently stopped");
            }
            else if(m_arr.length === 2){

            }
      })
})
