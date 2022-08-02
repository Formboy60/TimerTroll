function compte_a_rebours()
{
    const compte_a_rebours = document.getElementById("end");

    const date_actuelle = new Date();
    const date_evenement = new Date("Mar 14 12:45:28 2048");
    let total_secondes = (date_evenement - date_actuelle) / 1000;

    compte_a_rebours.style.color= '#'+(Math.random()*0xFFFFFF<<0).toString(16)


    if (total_secondes > 0)
    {
        let jours = Math.floor(total_secondes / (60 * 60 * 24));
        let heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

        let et = "et";
        let mot_jour = "jours,";
        let mot_heure = "heures,";
        let mot_minute = "minutes,";
        let mot_seconde = "secondes";

        if (jours == 0)
        {
            jours = '';
            mot_jour = '';
        }
        else if (jours == 1)
        {
            mot_jour = "jour,";
        }

        if (heures == 0)
        {
            heures = '';
            mot_heure = '';
        }
        else if (heures == 1)
        {
            mot_heure = "heure,";
        }

        if (minutes == 0)
        {
            minutes = '';
            mot_minute = '';
        }
        else if (minutes == 1)
        {
            mot_minute = "minute,";
        }

        if (secondes == 0)
        {
            secondes = '';
            mot_seconde = '';
            et = '';
        }
        else if (secondes == 1)
        {
            mot_seconde = "seconde";
        }

        if (minutes == 0 && heures == 0 && jours == 0)
        {
            et = "";
        }

        compte_a_rebours.innerHTML = jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + et + ' ' + secondes + ' ' + mot_seconde;
    }
    else
    {
        compte_a_rebours.innerHTML = 'Compte à rebours terminé.';
    }

    var actualisation = setTimeout("compte_a_rebours();", 1000);
}
compte_a_rebours();


document.onkeydown=function(e){
    let audio = document.querySelector('audio')
    if (e.keyCode == 123){
        document.getElementById("end").style.display = "none"
        document.querySelector('.scream').style.display = "flex"
        audio.play()
    }
}

document.oncontextmenu = function (e) {
    let audio = document.querySelector('audio')
    document.getElementById("end").style.display = "none"
        document.querySelector('.scream').style.display = "flex"
        audio.play()
}

document.querySelector('body').addEventListener("click", () => {
    let audio = document.querySelector('audio')
    document.getElementById("end").style.display = "none"
        document.querySelector('.scream').style.display = "flex"
        audio.play()
})

if(navigator.appVersion.indexOf("Mac") !=-1){
    let audio = document.querySelector('audio')
    document.getElementById("end").style.display = "none"
        document.querySelector('.scream').style.display = "flex"
        audio.play()
}

