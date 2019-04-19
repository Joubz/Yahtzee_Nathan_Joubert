
var auMoinsUnBrelan;
var auMoinsUnCarre;
var auMoinsUnFull;

var num_1 = 1;
var num_2 = 1;
var num_3 = 1;
var num_4 = 1;
var num_5 = 1;

var max_1 = 0;
var max_2 = 0;
var max_3 = 0;
var max_4 = 0;
var max_5 = 0;
var max_6 = 0;

var max_1_def = 0;
var max_2_def = 0;
var max_3_def = 0;
var max_4_def = 0;
var max_5_def = 0;
var max_6_def = 0;
var chanceVar = 0;
var brelanVar = 0;
var carreVar = 0;
var fullVar = 0;
var petiteSuiteVar = 0;
var grandeSuiteVar = 0;
var yahtzeeVar = 0;

var cptCase = 0;
var cptLancer = 0;

var caseDe1Valider = false;
var caseDe2Valider = false;
var caseDe3Valider = false;
var caseDe4Valider = false;
var caseDe5Valider = false;
var caseDe6Valider = false;
var caseBrelanValider = false;
var casePetiteSuiteValider = false;
var caseGrandeSuiteValider = false;
var caseFullValider = false;
var caseCarreValider = false;
var caseYahtzeeValider = false;
var caseChanceValider = false;

var caseDe1_PRE_Valider = false;
var caseDe2_PRE_Valider = false;
var caseDe3_PRE_Valider = false;
var caseDe4_PRE_Valider = false;
var caseDe5_PRE_Valider = false;
var caseDe6_PRE_Valider = false;
var caseBrelan_PRE_Valider = false;
var casePetiteSuite_PRE_Valider = false;
var caseGrandeSuite_PRE_Valider = false;
var caseFull_PRE_Valider = false;
var caseCarre_PRE_Valider = false;
var caseYahtzee_PRE_Valider = false;
var caseChance_PRE_Valider = false;


$(document).ready(function(){

  caseDe1Valider = false;
  caseDe2Valider = false;
  caseDe3Valider = false;
  caseDe4Valider = false;
  caseDe5Valider = false;
  caseDe6Valider = false;
  caseBrelanValider = false;
  casePetiteSuiteValider = false;
  caseGrandeSuiteValider = false;
  caseFullValider = false;
  caseCarreValider = false;
  caseYahtzeeValider = false;
  caseChanceValider = false;

  $("input:checkbox").prop('disabled', false);

  $("input:checkbox").prop('checked', false);

  $("#boutonValider").click(function() {


    if( caseDe1Valider == true && caseDe2Valider == true && caseDe3Valider == true && caseDe4Valider == true && caseDe5Valider == true && caseDe5Valider == true
      && caseBrelanValider == true && casePetiteSuiteValider == true && caseGrandeSuiteValider == true && caseCarreValider == true && caseFullValider == true
      && caseYahtzeeValider == true && caseChanceValider == true)
      {
        $('#msgErreur').html("Bravo, le jeu est fini ");
      }
      else {

        if(cptLancer == 3)
        {

          caseDe1_PRE_Valider = false;
          caseDe2_PRE_Valider = false;
          caseDe3_PRE_Valider = false;
          caseDe4_PRE_Valider = false;
          caseDe5_PRE_Valider = false;
          caseDe6_PRE_Valider = false;
          caseBrelan_PRE_Valider = false;
          casePetiteSuite_PRE_Valider = false;
          caseGrandeSuite_PRE_Valider = false;
          caseFull_PRE_Valider = false;
          caseCarre_PRE_Valider = false;
          caseYahtzee_PRE_Valider = false;
          caseChance_PRE_Valider = false;

          //test des checkbox
          if( $('input[name=checkbox_point_1]').is(':checked') || caseDe1Valider == true){
            if(caseDe1Valider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseDe1_PRE_Valider = true;
          }
          if( $('input[name=checkbox_point_2]').is(':checked') || caseDe2Valider == true){
            if(caseDe2Valider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseDe2_PRE_Valider = true;
          }
          if( $('input[name=checkbox_point_3]').is(':checked') || caseDe3Valider == true){
            if(caseDe3Valider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseDe3_PRE_Valider = true;
          }
          if( $('input[name=checkbox_point_4]').is(':checked') || caseDe4Valider == true){
            if(caseDe4Valider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseDe4_PRE_Valider = true;
          }
          if( $('input[name=checkbox_point_5]').is(':checked') || caseDe5Valider == true){
            if(caseDe5Valider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseDe5_PRE_Valider = true;
          }
          if( $('input[name=checkbox_point_6]').is(':checked') || caseDe6Valider == true){
            if(caseDe6Valider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseDe6_PRE_Valider = true;
          }
          if( $('input[name=checkbox_brelan]').is(':checked') || caseBrelanValider == true){
            if(caseBrelanValider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseBrelan_PRE_Valider = true;
          }
          if( $('input[name=checkbox_petiteSuite]').is(':checked') || casePetiteSuiteValider == true){
            if(casePetiteSuiteValider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            casePetiteSuite_PRE_Valider = true;
          }
          if( $('input[name=checkbox_grandeSuite]').is(':checked') || caseGrandeSuiteValider == true){
            if(caseGrandeSuiteValider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseGrandeSuite_PRE_Valider = true;
          }
          if( $('input[name=checkbox_full]').is(':checked') || caseFullValider == true){
            if(caseFullValider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseFull_PRE_Valider = true;
          }
          if( $('input[name=checkbox_carre]').is(':checked') || caseCarreValider == true){
            if(caseCarreValider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseCarre_PRE_Valider = true;
          }
          if( $('input[name=checkbox_yatzee]').is(':checked') || caseYahtzeeValider == true){
            if(caseYahtzeeValider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseYahtzee_PRE_Valider = true;
          }
          if( $('input[name=checkbox_chance]').is(':checked') || caseChanceValider == true){
            if(caseChanceValider == true)
            {
              cptCase = cptCase +1;
            }
          } else {
            cptCase = cptCase +1;
            caseChance_PRE_Valider = true;
          }

          if(cptCase ==0)
          {
            $('#msgErreur').html("Erreur : Veuillez choisir une case ");
            cptCase =0
          }
          else  if(cptCase == 12)
          {
            cptCase = 0;

            //test des checkbox
            if(caseDe1_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#champ_1_def').html(max_1_def);
              $("input[name=checkbox_point_1]").prop('checked', false);
              caseDe1Valider = true;
              $("input[name=checkbox_point_1]").attr('disabled', true);
              caseDe1_PRE_Valider = false;
            }
            if(caseDe2_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#champ_2_def').html(max_2_def);
              $("input[name=checkbox_point_2]").prop('checked', false);
              caseDe2Valider = true;
              $("input[name=checkbox_point_2]").prop('disabled', true);
              caseDe2_PRE_Valider = false;
            }
            if(caseDe3_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#champ_3_def').html(max_3_def);
              $("input[name=checkbox_point_3]").prop('checked', false);
              caseDe3Valider = true;
              $("input[name=checkbox_point_3]").prop('disabled', true);
              caseDe3_PRE_Valider = false;
            }
            if(caseDe4_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#champ_4_def').html(max_4_def);
              $("input[name=checkbox_point_4]").prop('checked', false);
              caseDe4Valider = true;
              $("input[name=checkbox_point_4]").prop('disabled', true);
              caseDe4_PRE_Valider = false;
            }
            if(caseDe5_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#champ_5_def').html(max_5_def);
              $("input[name=checkbox_point_5]").prop('checked', false);
              caseDe5Valider = true;
              $("input[name=checkbox_point_5]").prop('disabled', true);
              caseDe5_PRE_Valider = false;
            }
            if(caseDe6_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#champ_6_def').html(max_6_def);
              $("input[name=checkbox_point_6]").prop('checked', false);
              $("input[name=checkbox_point_6]").prop('disabled', true);
              caseDe6_PRE_Valider = false;
              caseDe6Valider = true;
            }
            if(caseBrelan_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              cptCase = cptCase +1;
              $('#brelanCellDef').html(brelanVar);
              $("input[name=checkbox_brelan]").prop('checked', false);
              $("input[name=checkbox_brelan]").prop('disabled', true);
              caseBrelan_PRE_Valider = false;
              caseBrelanValider = true;
            }
            if(casePetiteSuite_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#petiteSuiteCellDef').html(petiteSuiteVar);
              $("input[name=checkbox_petiteSuite]").prop('checked', false);
              $("input[name=checkbox_petiteSuite]").prop('disabled', true);
              casePetiteSuiteValider = true;
              casePetiteSuite_PRE_Valider = false;
            }
            if(caseGrandeSuite_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#grandeSuiteCellDef').html(grandeSuiteVar);
              $("input[name=checkbox_grandeSuite]").prop('checked', false);
              $("input[name=checkbox_grandeSuite]").prop('disabled', true);
              caseGrandeSuiteValider = true;
              caseGrandeSuite_PRE_Valider = false;
            }
            if(caseFull_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#fullCellDef').html(fullVar);
              $("input[name=checkbox_full]").prop('checked', false);
              $("input[name=checkbox_full]").prop('disabled', true);
              caseFullValider = true;
              caseFull_PRE_Valider = false;
            }
            if(caseCarre_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#carreCellDef').html(carreVar);
              $("input[name=checkbox_carre]").prop('checked', false);
              $("input[name=checkbox_carre]").prop('disabled', true);
              caseCarreValider = true;
              caseCarre_PRE_Valider = false;
            }
            if(caseYahtzee_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#yahtzeeCellDef').html(yahtzeeVar);
              $("input[name=checkbox_yatzee]").prop('checked', false);
              $("input[name=checkbox_yatzee]").prop('disabled', true);
              caseYahtzeeValider = true;
              caseYahtzee_PRE_Valider = false;
            }
            if(caseChance_PRE_Valider == true){
              cptCase = cptCase +1;
            } else {
              $('#chanceCellDef').html(chanceVar);
              $("input[name=checkbox_chance]").prop('checked', false);
              $("input[name=checkbox_chance]").prop('disabled', true);
              caseChanceValider = true;
              caseChance_PRE_Valider = false;
            }


            if( caseDe1Valider == true && caseDe2Valider == true && caseDe3Valider == true && caseDe4Valider == true && caseDe5Valider == true && caseDe5Valider == true
              && caseBrelanValider == true && casePetiteSuiteValider == true && caseGrandeSuiteValider == true && caseCarreValider == true && caseFullValider == true
                && caseYahtzeeValider == true && caseChanceValider == true)
              {
                $("#boutonLancer").prop("disabled", true);
                $("#boutonValider").prop("disabled", true);

                $('#totalSecSup').html( brelanVar + carreVar + fullVar + yahtzeeVar + petiteSuiteVar + grandeSuiteVar);

                $('#msgErreur').html("Bravo, le jeu est fini ");
                $('#totalScore').html(max_1_def + max_2_def + max_3_def + max_4_def + max_5_def + max_6_def + brelanVar + petiteSuiteVar + grandeSuiteVar + fullVar + carreVar + yahtzeeVar + chanceVar);

              }
              else {
                cptLancer = 0;
                cptCase = 0;
                $("input[name=checkbox_dice_1]").prop('checked', false);
                $("input[name=checkbox_dice_2]").prop('checked', false);
                $("input[name=checkbox_dice_3]").prop('checked', false);
                $("input[name=checkbox_dice_4]").prop('checked', false);
                $("input[name=checkbox_dice_5]").prop('checked', false);
                $("#boutonLancer").prop("disabled", false);
                $('#msgErreur').html(" ");
              }

            }

            else {
              $('#msgErreur').html("Erreur : Veuillez choisir UNE seule case ou une case qui n'a pas encore été garder ");
              cptCase =0
            }


          }
          else {
            $('#msgErreur').html("Erreur : Veuillez effectuer les 3 lancers");
          }
        }
      });


      $("#boutonLancer").click(function() {

        if( caseDe1Valider == true && caseDe2Valider == true && caseDe3Valider == true && caseDe4Valider == true && caseDe5Valider == true && caseDe5Valider == true
          && caseBrelanValider == true && casePetiteSuiteValider == true && caseGrandeSuiteValider == true && caseCarreValider == true && caseFullValider == true
            && caseYahtzeeValider == true && caseChanceValider == true)
          {
            $('#msgErreur').html("Bravo, le jeu est fini ");
          }
          else {





            if(cptLancer == 3)
            {
              $("#boutonLancer").prop("disabled", true);
              $('#msgErreur').html("Erreur : Veuillez validez une case");
            }
            else {
              $('#msgErreur').html(" ");

              if( $('input[name=checkbox_dice_1]').is(':checked') ){
              }
              else {
                var dice_1 = $("#dice-1");
                num_1 = Math.floor(Math.random()*6+1);//random num 1-6
                dice_1.attr("class","dice");
                dice_1.addClass("dice_" + num_1);
              }


              if( $('input[name=checkbox_dice_2]').is(':checked') ){
              } else {
                var dice_2 = $("#dice-2");
                num_2 = Math.floor(Math.random()*6+1);//random num 1-6
                dice_2.attr("class","dice");
                dice_2.addClass("dice_" + num_2);
              }

              if( $('input[name=checkbox_dice_3]').is(':checked') ){
              } else {
                var dice_3 = $("#dice-3");
                num_3 = Math.floor(Math.random()*6+1);//random num 1-6
                dice_3.attr("class","dice");
                dice_3.addClass("dice_" + num_3);
              }

              if( $('input[name=checkbox_dice_4]').is(':checked') ){
              } else {
                var dice_4 = $("#dice-4");
                num_4 = Math.floor(Math.random()*6+1);//random num 1-6
                dice_4.attr("class","dice");
                dice_4.addClass("dice_" + num_4);
              }

              if( $('input[name=checkbox_dice_5]').is(':checked') ){
              } else {
                var dice_5 = $("#dice-5");
                num_5 = Math.floor(Math.random()*6+1);//random num 1-6
                dice_5.attr("class","dice");
                dice_5.addClass("dice_" + num_5);
              }

              initScore(num_1, num_2, num_3, num_4, num_5);

              cptLancer = cptLancer + 1;
            }
          }
        });

        function initScore(num_1,  num_2,  num_3,  num_4,  num_5){

          max_1 = 0;
          max_2 = 0;
          max_3 = 0;
          max_4 = 0;
          max_5 = 0;
          max_6 = 0;

          auMoinsUnBrelan = false;
          auMoinsUnCarre = false;
          auMoinsUnFull = false;

          if( $('input[name=checkbox_point_1]').is(':checked') || caseDe1Valider == true ){
          } else {
            max_1_def = 0;
          }
          if( $('input[name=checkbox_point_2]').is(':checked') || caseDe2Valider == true){
          } else {
            max_2_def = 0;
          }
          if( $('input[name=checkbox_point_3]').is(':checked') || caseDe3Valider == true){
          } else {
            max_3_def = 0;
          }
          if( $('input[name=checkbox_point_4]').is(':checked') || caseDe4Valider == true ){
          } else {
            max_4_def = 0;
          }
          if( $('input[name=checkbox_point_5]').is(':checked') || caseDe5Valider == true ){
          } else {
            max_5_def = 0;
          }
          if( $('input[name=checkbox_point_6]').is(':checked') || caseDe6Valider == true){
          } else {
            max_6_def = 0;
          }

          addScore(num_1);
          addScore(num_2);
          addScore(num_3);
          addScore(num_4);
          addScore(num_5);

          if( $('input[name=checkbox_brelan]').is(':checked') || caseBrelanValider == true){
          } else {
            $('#brelanCell').html(" ");
            brelanVar = 0;
          }

          if( $('input[name=checkbox_carre]').is(':checked') || caseCarreValider == true){
          } else {
            $('#carreCell').html(" ");
            carreVar = 0;
          }

          if( $('input[name=checkbox_full]').is(':checked') || caseFullValider == true){
          } else {
            $('#fullCell').html(" ");
            fullVar = 0;
          }

          if( $('input[name=checkbox_petiteSuite]').is(':checked') || casePetiteSuiteValider == true){
          } else {
            $('#petiteSuiteCell').html(" ");
            petiteSuiteVar = 0;
          }

          if( $('input[name=checkbox_grandeSuite]').is(':checked') || caseGrandeSuiteValider == true){
          } else {
            $('#grandeSuiteCell').html(" ");
            grandeSuiteVar = 0;
          }

          if( $('input[name=checkbox_yatzee]').is(':checked') || caseYahtzeeValider == true){
          } else {
            $('#yahtzeeCell').html(" ");
            yahtzeeVar = 0;
          }

          if( $('input[name=checkbox_point_1]').is(':checked') ){
          } else {
            if (max_1 == 0)
            {
              $('#champ_1').html(" ");
            } else {
              max_1_def = max_1;
              $('#champ_1').html(max_1);
            }
          }

          if( $('input[name=checkbox_point_2]').is(':checked') ){
          } else {
            if (max_2 == 0)
            {
              $('#champ_2').html(" ");
            } else {
              max_2_def = max_2;
              $('#champ_2').html(max_2);
            }
          }

          if( $('input[name=checkbox_point_3]').is(':checked') ){
          } else {
            if (max_3 == 0)
            {
              $('#champ_3').html(" ");
            } else {
              max_3_def = max_3;
              $('#champ_3').html(max_3);
            }
          }

          if( $('input[name=checkbox_point_4]').is(':checked') ){
          } else {
            if (max_4 == 0)
            {
              $('#champ_4').html(" ");
            } else {
              max_4_def = max_4;
              $('#champ_4').html(max_4);
            }
          }

          if( $('input[name=checkbox_point_5]').is(':checked') ){
          } else {
            if (max_5 == 0)
            {
              $('#champ_5').html(" ");
            } else {
              max_5_def = max_5;
              $('#champ_5').html(max_5);
            }
          }

          if( $('input[name=checkbox_point_6]').is(':checked') ){
          } else {
            if (max_6 == 0)
            {
              $('#champ_6').html(" ");
            } else {
              max_6_def = max_6;
              $('#champ_6').html(max_6);
            }
          }

          $('#champ_total_inf').html(max_1 + max_2 + max_3 + max_4 + max_5 + max_6);
          $('#totalSecInf').html(max_1 + max_2 + max_3 + max_4 + max_5 + max_6);

          if( $('input[name=checkbox_chance]').is(':checked') || caseChanceValider == true){
          } else {
            chanceVar = 0;
            chanceVar = max_1_def + max_2_def + max_3_def + max_4_def + max_5_def + max_6_def;

            $('#chanceCell').html(chanceVar);
          }



          testBrelan(num_1,  num_2,  num_3,  num_4,  num_5);

          testPetiteSuite(num_1,  num_2,  num_3,  num_4,  num_5);




        }



        function addScore( num) {
          if(num == 1)
          {
            max_1 = max_1 + num;
          } else if(num ==2)
          {
            max_2 = max_2 + num;
          } else if(num == 3)
          {

            max_3 = max_3 + num;
          } else if(num ==4)
          {
            max_4 = max_4 + num;
          } else if(num == 5)
          {
            max_5 = max_5 + num;

          } else if(num == 6)
          {
            max_6 = max_6 + num;
          }
        }

        function testBrelan(num_1,  num_2,  num_3,  num_4,  num_5) {
          if(num_1 == num_2 && num_1 == num_3 && auMoinsUnBrelan == false)
          {
            $('#brelanCell').html(num_1*3);
            auMoinsUnBrelan=true;
            brelanVar = num_1*3;
            testCarre(num_1, num_4, num_5);
          }
          else if(num_1 == num_3 && num_1 == num_4 && auMoinsUnBrelan == false)
          {
            $('#brelanCell').html(num_1*3);
            auMoinsUnBrelan=true;
            brelanVar = num_1*3;
            testCarre(num_1, num_2, num_5);
          }
          else if (num_1 == num_4 && num_1 == num_5 && auMoinsUnBrelan == false)
          {
            $('#brelanCell').html(num_1*3);
            auMoinsUnBrelan=true;
            brelanVar = num_1*3;
            testCarre(num_1, num_2, num_3);
          }
          else if (num_1 == num_2 && num_1 == num_4 && auMoinsUnBrelan == false)
          {
            $('#brelanCell').html(num_1*3);
            auMoinsUnBrelan=true;
            brelanVar = num_1*3;
            testCarre(num_1, num_3, num_5);
          }
          else if (num_1 == num_2 && num_1 == num_5 && auMoinsUnBrelan == false)
          {
            $('#brelanCell').html(num_1*3);
            auMoinsUnBrelan=true;
            brelanVar = num_1*3;
            testCarre(num_1, num_3, num_4);
          }
          else if (num_1 == num_3 && num_1 == num_5 && auMoinsUnBrelan == false)
          {
            $('#brelanCell').html(num_1*3);
            auMoinsUnBrelan=true;
            brelanVar = num_1*3;
            testCarre(num_1, num_2, num_4);
          }
          else if (num_2 == num_3 && num_2 == num_4 && auMoinsUnBrelan == false)
          {
            $('#brelanCell').html(num_2*3);
            auMoinsUnBrelan=true;
            brelanVar = num_2*3;
            testCarre(num_2, num_1, num_5);
          }
          else if (num_2 == num_4 && num_2 == num_5 && auMoinsUnBrelan == false)
          {
            $('#brelanCell').html(num_2*3);
            auMoinsUnBrelan=true;
            brelanVar = num_2*3;
            testCarre(num_2, num_1, num_3);
          }
          else if (num_2 == num_3 && num_2 == num_5 && auMoinsUnBrelan == false)
          {
            $('#brelanCell').html(num_2*3);
            auMoinsUnBrelan=true;
            brelanVar = num_2*3;
            testCarre(num_2, num_1, num_4);
          }
          else if (num_3 == num_4 && num_3 == num_5 && auMoinsUnBrelan == false)
          {
            $('#brelanCell').html(num_3*3);
            auMoinsUnBrelan=true;
            brelanVar = num_3*3;
            testCarre(num_3, num_1, num_2);
          }
        }

        function testCarre(num_1_juste, num_2,  num_3) {
          if(num_1_juste == num_2  && auMoinsUnCarre == false)
          {
            $('#carreCell').html(num_1_juste*4);
            carreVar = num_1_juste*4;
            auMoinsUnCarre=true;
            testYatzee(num_1_juste,num_3)
          }
          else  if(num_1_juste == num_3  && auMoinsUnCarre == false)
          {
            $('#carreCell').html(num_1_juste*4);
            carreVar = num_1_juste*4;
            auMoinsUnCarre=true;
            testYatzee(num_1_juste,num_2)
          }
          else {
            testFull(num_2, num_3);
          }
        }

        function testFull(num_1, num_2) {
          if(num_1 == num_2 && auMoinsUnBrelan == true && auMoinsUnCarre == false)
          {
            $('#fullCell').html(25);
            fullVar = 25;
          }
        }

        function testYatzee(num_1_juste, num_2) {
          if(num_1_juste == num_2 && auMoinsUnCarre == true && auMoinsUnFull == false)
          {
            $('#yahtzeeCell').html(50);
            yahtzeeVar = 50;
            auMoinsUnFull == true;
          }
        }

        function testPetiteSuite(num_1,  num_2,  num_3,  num_4,  num_5)  {
          //1-2-3-4
          if(num_1 == 1 || num_2 == 1 || num_3 == 1 || num_4 == 1 || num_5 == 1)
          {
            if(num_1 == 2 || num_2 == 2 || num_3 == 2 || num_4 == 2 || num_5 == 2)
            {
              if(num_1 == 3 || num_2 == 3 || num_3 == 3 || num_4 == 3 || num_5 == 3)
              {
                if(num_1 == 4 || num_2 == 4 || num_3 == 4 || num_4 == 4 || num_5 == 4)
                {
                  $('#petiteSuiteCell').html(30);
                  petiteSuiteVar = 30;
                  testGrandeSuite(num_1,  num_2,  num_3,  num_4,  num_5);
                }
              }
            }
          }
          // 2-3-4-5
          else if(num_1 == 2 || num_2 == 2 || num_3 == 2 || num_4 == 2 || num_5 == 2)
          {
            if(num_1 == 3 || num_2 == 3 || num_3 == 3 || num_4 == 3 || num_5 == 3)
            {
              if(num_1 == 4 || num_2 == 4 || num_3 == 4 || num_4 == 4 || num_5 == 4)
              {
                if(num_1 == 5 || num_2 == 5 || num_3 == 5 || num_4 == 5 || num_5 == 5)
                {
                  $('#petiteSuiteCell').html(30);
                  petiteSuiteVar = 30;
                  testGrandeSuite(num_1,  num_2,  num_3,  num_4,  num_5);
                }
              }
            }
          }
          //3-4-5-6
          else if(num_1 == 3 || num_2 == 3 || num_3 == 3 || num_4 == 3 || num_5 == 3)
          {
            if(num_1 == 4 || num_2 == 4 || num_3 == 4 || num_4 == 4 || num_5 == 4)
            {
              if(num_1 == 5 || num_2 == 5 || num_3 == 5 || num_4 == 5 || num_5 == 5)
              {
                if(num_1 == 6 || num_2 == 6 || num_3 == 6 || num_4 == 6 || num_5 == 6)
                {
                  $('#petiteSuiteCell').html(30);
                  petiteSuiteVar = 30;
                  testGrandeSuite(num_1,  num_2,  num_3,  num_4,  num_5);
                }
              }
            }
          }
        }

        function testGrandeSuite(num_1,  num_2,  num_3,  num_4,  num_5)  {
          //1-2-3-4-5
          if(num_1 == 1 || num_2 == 1 || num_3 == 1 || num_4 == 1 || num_5 == 1)
          {
            if(num_1 == 2 || num_2 == 2 || num_3 == 2 || num_4 == 2 || num_5 == 2)
            {
              if(num_1 == 3 || num_2 == 3 || num_3 == 3 || num_4 == 3 || num_5 == 3)
              {
                if(num_1 == 4 || num_2 == 4 || num_3 == 4 || num_4 == 4 || num_5 == 4)
                {
                  if(num_1 == 5 || num_2 == 5 || num_3 == 5 || num_4 == 5 || num_5 == 5)
                  {
                    $('#grandeSuiteCell').html(40);
                    grandeSuiteVar = 40;
                  }
                }
              }
            }
          }
          // 2-3-4-5-6
          else if(num_1 == 2 || num_2 == 2 || num_3 == 2 || num_4 == 2 || num_5 == 2)
          {
            if(num_1 == 3 || num_2 == 3 || num_3 == 3 || num_4 == 3 || num_5 == 3)
            {
              if(num_1 == 4 || num_2 == 4 || num_3 == 4 || num_4 == 4 || num_5 == 4)
              {
                if(num_1 == 5 || num_2 == 5 || num_3 == 5 || num_4 == 5 || num_5 == 5)
                {
                  if(num_1 == 6 || num_2 == 6 || num_3 == 6 || num_4 == 6 || num_5 == 6)
                  {
                    $('#grandeSuiteCell').html(40);
                    grandeSuiteVar = 40;
                  }
                }
              }
            }
          }
        }

      });
