const extend			= require('js-base/core/extend');
const SpeechRecognizer	= require("sf-core/speechrecognizer");
const System			= require("sf-core/device/system");
const Application		= require("sf-core/application");
const ItemSpeechDesign  = require('library/ItemSpeech');
const Image             = require('sf-core/ui/image');
const Animator          = require('sf-core/ui/animator');
const Timer             = require("sf-core/timer");



const ItemSpeech = extend(ItemSpeechDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ItemSpeechDesign.defaults );
		this.pageName = pageName;
		
		var _inputField;
		
		Object.defineProperties(this, {
			'inputField': {
				get: function() {
					return _inputField;
				},
				set: function(value) {
					_inputField = value;
				}
			}
		});
		
		var _page;
		Object.defineProperties(this, {
			'page': {
				get: function() {
					return _page;
				},
				set: function(value) {
					_page = value;
				}
			}
		});
		
		this.onTouchEnded = function()
		{
			invalidate(this);
		}.bind(this);
		
	}
	
);

function invalidate(item)
{
	if (!SpeechRecognizer.isRunning()) 
		{
            if (System.OS === "iOS") {
                startSpeechRecognizer(item);
            }
            else if (System.OS === "Android") {
                const RECORD_AUDIO_CODE = 1002;
                Application.android.requestPermissions(RECORD_AUDIO_CODE, Application.android.Permissions.RECORD_AUDIO);
                Application.android.onRequestPermissionsResult = function(e) {
                    if (e.requestCode === RECORD_AUDIO_CODE && e.result) {
                        startSpeechRecognizer(item);
                    }
                };
            }
        }
        else {
            Timer.clearAllTimer();
            SpeechRecognizer.stop();
            item.icon.alpha = 1;
            item.icon.image = Image.createFromFile("images://icon_microphone.png");
        }
}

function startSpeechRecognizer(item) 
{
    item.icon.image = Image.createFromFile("images://icon_microphone_red.png");
    var myTimer = Timer.setInterval({
        task: function() {
            animate(item);

        },
        delay: 500
    });
    
    SpeechRecognizer.start({
        onResult: function(result) {
            item.inputField.text = result;
        },
        onFinish: function(result) {
            Timer.clearAllTimer();
        },
        onError: function(error) {
            Timer.clearAllTimer();
        }
    });
}

function animate(item)
{
    Animator.animate(item.page.layout, 200, function() {
        item.icon.alpha = 0;
    }).then(200, function() {
        item.icon.alpha = 1;
    }).complete(function() {
        item.icon.alpha = 1;
    });
}



module && (module.exports = ItemSpeech);
