/**
 * ---[[    j Q B r i c k    ]]---
 * Bricks for Mobile App Directors
 * ===============================
 * 
 *
 *
 */

define([
	"./AppClass",
	"./View"
	
], function(
	AppClass,
	View
	
) {
	
	
	var jQbrick = function() {
		return {
			"AppClass" 		: AppClass,	
			"View"			: View
		}
	};
	
	
	/**
	 * AMD Output
	 * export an instance of jQbrick namespace so all features should be
	 * globally accessed and extended.
	 *
	 * If no global namespace conflicts exists it export jQbrick
	 * instance to the global namespace too.
	 */
	if (!window.jQbrick) {
		window.jQbrick = new jQbrick();
		return window.jQbrick;
	} else {
		return new jQbrick();
	}
	
});