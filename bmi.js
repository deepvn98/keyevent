
function bmi() {
    let height = parseInt(document.getElementById("chieucao")).value;
    let weight = parseInt(document.getElementById("cannang")).value;
    let result = weight/(height**2)
    if (result<18.5) {
        document.write("underweight");
    }else
        if (18.5<=result>20.5) {
            document.write("nornaml");
        }else
            if(20.5<=result<30) {
                document.write("overweight");
            }
            else {
                document.write("obese");
            }

}