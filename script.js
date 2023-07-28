function Q_O(id){
    this.element = document.getElementById(id);
    this.pts = Number((document.getElementById(id)).value);
    this.checked = (document.getElementById(id)).checked;
}

function calc_score(){
    var score=0;
    var sect = document.getElementById("sg-1");

    var name = (document.getElementById("name")).value;


    const q1_o1 = new Q_O("sg-q1-o1");
    const q1_o2 = new Q_O("sg-q1-o2");
    const q1_o3 = new Q_O("sg-q1-o3");
    const q1_o4 = new Q_O("sg-q1-o4");

    const q2_o1 = new Q_O("sg-q2-o1");
    const q2_o2 = new Q_O("sg-q2-o2");
    const q2_o3 = new Q_O("sg-q2-o3");
    const q2_o4 = new Q_O("sg-q2-o4");

    const q3_o1 = new Q_O("sg-q3-o1");
    const q3_o2 = new Q_O("sg-q3-o2");
    const q3_o3 = new Q_O("sg-q3-o3");
    const q3_o4 = new Q_O("sg-q3-o4");

    const q4_o1 = new Q_O("sg-q4-o1");
    const q4_o2 = new Q_O("sg-q4-o2");
    const q4_o3 = new Q_O("sg-q4-o3");
    const q4_o4 = new Q_O("sg-q4-o4");

    const q5_o1 = new Q_O("sg-q5-o1");
    const q5_o2 = new Q_O("sg-q5-o2");
    const q5_o3 = new Q_O("sg-q5-o3");
    const q5_o4 = new Q_O("sg-q5-o4");

    const q6_o1 = new Q_O("sg-q6-o1");
    const q6_o2 = new Q_O("sg-q6-o2");
    const q6_o3 = new Q_O("sg-q6-o3");
    const q6_o4 = new Q_O("sg-q6-o4");

    const q7_o1 = new Q_O("sg-q7-o1");
    const q7_o2 = new Q_O("sg-q7-o2");
    const q7_o3 = new Q_O("sg-q7-o3");
    const q7_o4 = new Q_O("sg-q7-o4");

    const q8_o1 = new Q_O("sg-q8-o1");
    const q8_o2 = new Q_O("sg-q8-o2");
    const q8_o3 = new Q_O("sg-q8-o3");
    const q8_o4 = new Q_O("sg-q8-o4");

    const q9_o1 = new Q_O("sg-q9-o1");
    const q9_o2 = new Q_O("sg-q9-o2");
    const q9_o3 = new Q_O("sg-q9-o3");
    const q9_o4 = new Q_O("sg-q9-o4");

    const q10_o1 = new Q_O("sg-q10-o1");
    const q10_o2 = new Q_O("sg-q10-o2");
    const q10_o3 = new Q_O("sg-q10-o3");
    const q10_o4 = new Q_O("sg-q10-o4");

    const q_ans = [q1_o1, q1_o2, q1_o3, q1_o4, 
                    q2_o1, q2_o2, q2_o3, q2_o4,
                    q3_o1, q3_o2, q3_o3, q3_o4,
                    q4_o1, q4_o2, q4_o3, q4_o4,
                    q5_o1, q5_o2, q5_o3, q5_o4,
                    q6_o1, q6_o2, q6_o3, q6_o4,
                    q7_o1, q7_o2, q7_o3, q7_o4,
                    q8_o1, q8_o2, q8_o3, q8_o4,
                    q9_o1, q9_o2, q9_o3, q9_o4,
                    q10_o1, q10_o2, q10_o3, q10_o4];

    for(var i in q_ans){
        var o = q_ans[i];
        if(o.checked == true){
            pts = o.pts;
            score+= pts;
        };
    }

    var type = '';

    if( score < 21){
        type = 'classic'
        sect.innerHTML = `<h1 id='sg-results-title'>${name}, we think you're</h1>
        <a href="results.html"><h1 id='sg-results-title-type'>${type}</h1></a>`;
    }

}