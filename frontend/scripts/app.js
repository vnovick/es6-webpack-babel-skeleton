require("core-js");
import {nodes} from 'utils/dom';
import WelcomePanel from "modules/welcomePanel/welcomePanel.component";
import Card from "components/card.component";

[].forEach.call(nodes('.grid__column'),function(el,index){
  var panel = index > 0 ? new Card : new WelcomePanel;
  panel.initPanel(el,`This is message no ${index+1}`)
  
});
module.hot.accept();