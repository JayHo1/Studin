(function(){
Template.__checkName("entreprise");
Template["entreprise"] = new Template("Template.entreprise", (function() {
  var view = this;
  return [ HTML.DIV({
    id: "header2"
  }, "\n		", Spacebars.include(view.lookupTemplate("navbar")), "\n		", HTML.Raw('<div class="container1">\n		    <div class="row">\n		      <div class="col-xs-4 col-sm-4 col-md-4 col-xs-push-4 col-sm-push-4 col-md-push-4 first-score">\n		        <img id="score" src="Images/blue-score.png">\n		      </div>\n		    </div>\n		    <div class="row">\n		      <div class="col-xs-10 col-sm-6 col-md-6 col-lg-4 col-xs-push-1 col-sm-push-3 col-md-push-3 col-lg-push-4">\n		        <h1>Choissez l\'école et la formation qui correspond à votre offre.</h1>\n		      </div>\n		    </div>\n		    <div class="row">\n		      <div class="col-xs-4 col-sm-4 col-md-4 col-xs-push-4 col-sm-push-4 col-md-push-4 last-score">\n		        <img id="score" src="Images/blue-score.png">\n		      </div>\n		    </div>\n		</div>'), "\n		", HTML.Raw('<div class="row">\n			<div class="poster col-xs-8 col-sm-6 col-md-4 col-xs-push-2 col-sm-push-3 col-md-push-4">\n				<a href="">Poster une offre</a>\n			</div>\n		</div>'), "\n	"), "\n	", Spacebars.include(view.lookupTemplate("corps2")), "\n	", Spacebars.include(view.lookupTemplate("footer")) ];
}));

})();
