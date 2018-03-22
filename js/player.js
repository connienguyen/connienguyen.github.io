$(document).ready(function() {
	$("#jquery_jplayer_1").jPlayer({
		ready: function() {
			// $(this).jPlayer("setMedia", {
			// 	title: "Angardsbergen",
			// 	mp3: "/data/audio/angardsbergen_reaper.mp3",
			// 	wav: "/data/audio/angardsbergen_reaper.wav"
			// });
		},
		cssSelectorAncestor: "#jp_container_1",
		swfPath: "/js",
		supplied: "mp3, wav",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});

	// Add event listeners
	$("#jquery_jplayer_1").on("angards", function (event) {
		var currentAudioTitle = $(this).jPlayer()[0].children[1].title;
		if (currentAudioTitle !== "Änggårdsbergen") {
			$(this).jPlayer("pause");
			$(this).jPlayer("setMedia", {
				title: "Änggårdsbergen",
				mp3: "/data/audio/angardsbergen_reaper.mp3",
				wav: "/data/audio/angardsbergen_reaper.wav"
			});
		}
	});

	$("#jquery_jplayer_1").on("lilla", function (event) {
		var currentAudioTitle = $(this).jPlayer()[0].children[1].title;
		// Prevent reloading existing audio
		if (currentAudioTitle !== "Lilla bommen") {
			$(this).jPlayer("pause");
			$(this).jPlayer("setMedia", {
				title: "Lilla bommen",
				mp3: "/data/audio/lillabommen_reaper.mp3",
				wav: "/data/audio/lillabommen_reaper.wav"
			});
		}
	});

	$("#jquery_jplayer_1").on("linne", function (event) {
		var currentAudioTitle = $(this).jPlayer()[0].children[1].title;
		if (currentAudioTitle !== "Linné") {
			$(this).jPlayer("pause");
			$(this).jPlayer("setMedia", {
				title: "Linné",
				mp3: "/data/audio/linne_reaper.mp3",
				wav: "/data/audio/linne_reaper.wav"
			});
		}
	});

	$("#jquery_jplayer_1").on("mast", function (event) {
		var currentAudioTitle = $(this).jPlayer()[0].children[1].title;
		if (currentAudioTitle !== "Masthugget") {
			$(this).jPlayer("pause");
			$(this).jPlayer("setMedia", {
				title: "Masthugget",
				mp3: "/data/audio/masthugget_reaper.mp3",
				wav: "/data/audio/masthugget_reaper.wav"
			});
		}
	});
});