<script lang="ts">
    import cover1 from "/Covers/Begin_again_Vera_Keyes.jpg";
    import cover2 from "/Covers/Beyond_the_Sea.jpg";
    import cover3 from "/Covers/Put_Your_Head_On_My_Shoulder.jpg";
    import track1 from "/Music/Begin_again_Vera_Keyes.mp3";
    import track2 from "/Music/Beyond_the_Sea.mp3";
    import track3 from "/Music/Put_Your_Head_On_My_Shoulder.mp3";
    let trackPlaying: boolean = false;
    let volumeMuted: boolean = false;
    let volume: number = 0.5;
    let volumeSliderValue: number = 0;
    let maxVolume: number = 100;
    let trackId: number = 0;
    let audioPlayer;
    let timeline: number = 0;
    let sliderValue: number = 0;
    let duration :number;
    let trackLoaded: boolean = false;
    let audioSrc: any;
    let min: number;
    const tracks = [track1, track2, track3];
    const trackNames = ["Begin again", "Put your head on my shoulder", "Beyond the sea"];
    const artists = ["Vera Keyes", "Paul Anka", "Bobby Darin"];
    const covers = [cover1, cover2, cover3];

</script>
<player class="player">
    <h1>Ol' Music Player</h1>
    <div class="music-container">
        <div class="music-info">
            <h4 id="title">{trackNames[trackId]} - {artists[trackId]}</h4>
            <div class="current-time">00:00</div><div class="total-duration">00:00</div>
            <div class="progress-container">
                <div class="progress"></div>
                <input type="range" min={min} max={duration} class="seek-slider" bind:value={sliderValue}>
                <seek-slider min={0} {timeline} {trackLoaded} {duration} {sliderValue} />
            </div>
        </div>
        <audio src={audioSrc} id="audio" bind:this={audioPlayer} bind:duration bind:currentTime={timeline} bind:volume />
        <div class="img-container">
            <img src="{covers[trackId]}" alt="music_cover" id="cover">
        </div>
        <div class="navigation">
            <button id="prev" class="action-btn">
                <i class="fas fa-backward"></i>
            </button>
            <button id="play" class="action-btn action-btn-big" on:click = {() => trackPlaying ? "fa-pause" : "fa-play"}>
                <i class="fas fa-play"></i>
            </button>
            <button id="next" class="action-btn">
                <i class="fas fa-forward"></i>
            </button>
            <button id="loop" class="action-btn">
                <i class="fas fa-arrows-rotate"></i>
            </button>
            <button id="mute" class="action-btn">
                <i class="fas fa-volume-mute"></i>
            </button>
            <div class="Volume">
                <div class="slider">
                    <!-- <input type="range" min="0" max="100" value="100" class="volume-slider"> -->
                    <volume-slider min={0} max={maxVolume} {volume} {volumeSliderValue}/>
                    <div class="progress" style="width: {volume * 100}%"> </div>
                    <div class="sliderValue"></div>
                </div>
            </div>
        </div>
        <div class="playlist">
            
        </div>
    </div>
        <script src="script.js"></script>
</player>