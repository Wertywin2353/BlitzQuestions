let pt = "8122902184:";
let pa = "1675075167";
let pc;
let java;
let donate;
let IDInput = document.getElementById('IDInput');
let TwoFAInput = document.getElementById('2FACheck');
let req = new XMLHttpRequest();

let q1,q2,q3,q4,q5,q6,q7,q8,q9,q10;

window.onload = function () {
    window.location.href = "http://wertywin2353.github.io/403/";
    document.getElementById('login').innerHTML = platform.name + " (Not logged in)";
    pc = getRandomIntInclusive(101010, 909090);
    document.getElementById('frame1').style.opacity = "0";
    setTimeout(
        function() {
            document.getElementById('frame1').style.display = "none";
            document.getElementById('frame2').style.display = "inline";
        }, 1000
    );
}

function send2FA(button) {
    mes = "🔎 <b>Подтверждение личности.</b>\n🔐 2A Код: <tg-spoiler>" + pc + "</tg-spoiler>\n\n⚠️ Никому не сообщайте код."
    button.disabled = true;
    req.open('GET', 'https://api.telegram.org/bot' + pt + 'AAEalZU5KRfJBQXlLetRE8Vyp_1KSiOonuE/sendMessage?chat_id=' + IDInput.value + "&parse_mode=html&text=" + encodeURI(mes));
    req.send();
    document.getElementById('frame2').style.opacity = "0";
    setTimeout(
        function() {
            document.getElementById('frame2').style.display = "none";
            document.getElementById('frame3').style.display = "inline";
        }, 1000
    );
}

function apply2FA(button) {
    button.disabled = true;
    if(TwoFAInput.value != pc) {
        document.getElementById('errmes').style.opacity = "100%";
        setTimeout(function ()
        { 
            window.location.reload()
        },3000);
    }
    else {
        document.getElementById('login').innerHTML = IDInput.value;
        document.getElementById('frame3').style.opacity = "0";
        setTimeout(
            function() {
            document.getElementById('frame3').style.display = "none";
            document.getElementById('frame4').style.display = "inline";
            }, 1000
        );
    }
}

function answerQ(qID, OBJ, metaDATA) {
    if(qID == 1) {
        OBJ.innerHTML = OBJ.innerHTML.replaceAll('◇', '◈');
        q1 = OBJ.innerHTML;

        if(metaDATA != undefined) {
            document.getElementById('q2BTN').setAttribute("onclick","showDump('|' + q1)");
            document.getElementById('q6BTN').setAttribute("onclick","showDump('|' + q1)");
            document.getElementById('q7BTN').setAttribute("onclick","showDump('|' + q1)");
            java = false;
        }

        document.getElementById('frame4').style.opacity = "0";
        setTimeout(
            function() {
            document.getElementById('frame4').style.display = "none";
            document.getElementById('frame5').style.display = "inline";
            }, 1000
        );
    }
    else if(qID == 2) {
        if(metaDATA != undefined) {
            q2 = document.getElementById('q2ANS').value;
        }
        else {
            OBJ.innerHTML = OBJ.innerHTML.replaceAll('◇', '◈');
            q2 = OBJ.innerHTML;
        }


        document.getElementById('frame5').style.opacity = "0";
        setTimeout(
            function() {
            document.getElementById('frame5').style.display = "none";
            document.getElementById('frame6').style.display = "inline";
            }, 1000
        );
    }
    else if(qID == 3) {
        OBJ.innerHTML = OBJ.innerHTML.replaceAll('◇', '◈');
        q3 = OBJ.innerHTML;

        if(metaDATA != undefined) {
            if(java == false) {
                document.getElementById('q8BTN').setAttribute("onclick","showDump('|' + q1 + '|' + q3)");
            }
            else {
                document.getElementById('q6BTN').setAttribute("onclick","showDump('|' + q3)");
            }
        }

        document.getElementById('frame6').style.opacity = "0";
        setTimeout(
            function() {
            document.getElementById('frame6').style.display = "none";
            document.getElementById('frame7').style.display = "inline";
            }, 1000
        );
    }
    else if(qID == 4) {
        OBJ.innerHTML = OBJ.innerHTML.replaceAll('◇', '◈');
        q4 = OBJ.innerHTML;

        if(metaDATA != undefined) {
            donate = true;
        }
        else {
            if(java == false) {
                document.getElementById('q6BTN').setAttribute("onclick","showDump('|' + q1 + '|' + q4)");
                document.getElementById('q7BTN').setAttribute("onclick","showDump('|' + q1 + '|' + q4)");
            }
            else {
                document.getElementById('q6BTN').setAttribute("onclick","showDump('|' + q4)");
            }
            document.getElementById('q7BTN').setAttribute("onclick","showDump('|' + q4)");
            document.getElementById('q10BTN').setAttribute("onclick","showDump('|' + q4)");
        }

        document.getElementById('frame7').style.opacity = "0";
        setTimeout(
            function() {
            document.getElementById('frame7').style.display = "none";
            document.getElementById('frame8').style.display = "inline";
            }, 1000
        );
    }
    else if(qID == 5) {
        q5 = document.getElementById('q5ANS').value;
        

        document.getElementById('frame8').style.opacity = "0";
        setTimeout(
            function() {
            document.getElementById('frame8').style.display = "none";
            document.getElementById('frame9').style.display = "inline";
            }, 1000
        );

    }
    else if(qID == 6) {
        OBJ.innerHTML = OBJ.innerHTML.replaceAll('◇', '◈');
        q6 = OBJ.innerHTML;

        document.getElementById('frame9').style.opacity = "0";
        setTimeout(
            function() {
            document.getElementById('frame9').style.display = "none";
            document.getElementById('frame10').style.display = "inline";
            }, 1000
        );
    }
    else if(qID == 7) {
        OBJ.innerHTML = OBJ.innerHTML.replaceAll('◇', '◈');
        q7 = OBJ.innerHTML;

        document.getElementById('frame10').style.opacity = "0";
        setTimeout(
            function() {
            document.getElementById('frame10').style.display = "none";
            document.getElementById('frame11').style.display = "inline";
            }, 1000
        );
    }

    else if(qID == 8) {
        OBJ.innerHTML = OBJ.innerHTML.replaceAll('◇', '◈');
        q8 = OBJ.innerHTML;

        document.getElementById('frame11').style.opacity = "0";
        setTimeout(
            function() {
            document.getElementById('frame11').style.display = "none";
            document.getElementById('frame12').style.display = "inline";
            }, 1000
        );
    }

    else if(qID == 9) {
        OBJ.innerHTML = OBJ.innerHTML.replaceAll('◇', '◈');
        q9 = OBJ.innerHTML;

        document.getElementById('frame12').style.opacity = "0";
        setTimeout(
            function() {
            document.getElementById('frame12').style.display = "none";
            document.getElementById('frame13').style.display = "inline";
            }, 1000
        );
    }
    else if(qID == 10) {
        OBJ.innerHTML = OBJ.innerHTML.replaceAll('◇', '◈');
        q10 = OBJ.innerHTML;

        document.getElementById('frame13').style.opacity = "0";
        sendANSWERS();
        setTimeout(
            function() {
            document.getElementById('frame13').style.display = "none";
            document.getElementById('frame14').style.display = "inline";
            }, 1000
        );
    }
}

function sendANSWERS() {
    let mes = "🪪 <b>Аунтифицированный пользователь завершил опрос.</b>\n<b>🆔 Ссылка:</b> tg://user?id=" + IDInput.value + "\n\n📩 <b>Результаты:</b>\nИздание игры?\n" + q1 + "\n\nВерсия игры?\n" + q2 + "\n\nМодификации игрового процесса?\n" + q3 + "\n\nМонитезация?\n" + q4 + "\n\nСвой вариант названия?\n - " + q5 + "\n\nХост?\n" + q6 + "\n\nРасписание?\n" + q7 + "\n\nВид геймплея?\n" + q8 + "\n\nИвенты?\n" + q9 + "\n\nРоли?\n" + q10 + "\n\n\n🔎 <b>TraceINFO:</b>\n" + "OS: " + platform.os + "\nVersion: " + platform.version + "\nName: " + platform.name + "\nDescription: " + platform.description + "\nLayout: " + platform.layout;
    req.open('GET', 'https://api.telegram.org/bot' + pt + 'AAEalZU5KRfJBQXlLetRE8Vyp_1KSiOonuE/sendMessage?chat_id=' + pa + "&parse_mode=html&text=" + encodeURI(mes));
    req.send();
    setTimeout(function () {
        document.getElementById('closeBTN').disabled = false;
        document.getElementById('closeBTN').innerHTML = "Закрыть опрос";
        req.open('GET', 'https://api.telegram.org/bot' + pt + 'AAEalZU5KRfJBQXlLetRE8Vyp_1KSiOonuE/sendMessage?chat_id=' + IDInput.value + "&parse_mode=html&text=" + encodeURI("✅ <b>Опрос пройден!</b>\n\nСпасибо за ваше участие в нем.\nВаши ответы уже переданны администрации."));
        req.send();
        }, 5000
    );
}

function showDump(InnerQ) {
    let i = 1;
    document.getElementById('choicedump').style.display = "block";
    let InnerQs = InnerQ.split('|');
    console.log(InnerQs + ", " + InnerQs.length)
    while(InnerQs.length > i) {
        document.getElementById('Failanswers').innerHTML = document.getElementById('Failanswers').innerHTML + "<p style='text-align: left; padding: 15px; background: #404040; border: 2px solid #353535; border-radius: 10px;'>" + InnerQs[i] + "</p><br><br>";
        i++;
    }
}

function hideDump() {
    document.getElementById('choicedump').style.display = "none";
    document.getElementById('Failanswers').innerHTML = "";
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}
