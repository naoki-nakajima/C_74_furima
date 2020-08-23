document.addEventListener (
  "DOMContentLoaded", e => {
    if (document.getElementById("token_submit") != null) {
      Payjp.setPublicKey("pk_test_9c80a5edeb7c36a3c71632a1");
      let btn = document.getElementById("token_submit");
      btn.addEventListener("click", e => {
        e.preventDefault();
        let card = {
          number: document.getElementById("card_number").value,
          cvc: document.getElementById("cvc").value,
          exp_month: document.getElementById("exp_month").value,
          exp_year: document.getElementById("exp_year").value
        };
        Payjp.createToken(card, (status, response) => {
          if (status === 200) {
            $("#card_number").removeAttr("name");
            $("#cvc").removeAttr("name");
            $("#exp_month").removeAttr("name");
            $("#exp_year").removeAttr("name");
            $("#card_tokens").append (
              $('<input type = "hidden" name = "payjp-token">').val(response.id)
            );
            document.inputForm.submit();
            alert("カードの登録が完了しました");
          } else {
            alert("カード情報が正しくありません");
          }
        });
      });
    }
  },
  false
);