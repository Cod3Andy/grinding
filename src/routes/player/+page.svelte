<script lang="ts">
    let tracks: [] = []
    let songIndex: number = 0
    let audio: HTMLAudioElement
    let isPlaying: boolean = false
    let volume: number = 0.5
    let progress: number = 0
    function fileInput(event) {
        const file = event.target.files[0];
        audio = new Audio();
        audio.src = URL.createObjectURL(file);
        tracks.push(file)
        console.log(tracks, 'test')
    }
    function playAudio() {
        isPlaying = true;
        audio.play()
    }
    function pauseAudio() {
        isPlaying = false;
        audio.pause()
    }
    function audioDuration() {
        audio.duration
    }
function updateProgress() {
    if (audio) {
        progress = audio.currentTime / audio.duration * 100
    }
}
    function volumeControl() {
        if (audio) {
            audio.volume = volume
        }
    }
    function muteAudio() {
        audio.volume > 0 ? (audio.volume = 0) : (audio.volume = 0.5)
    }
    function loopAudio () {
    audio.loop === true ? audio.loop = false : audio.loop = true
    playAudio()
}
    function prevAudio () {
        songIndex--
        if(songIndex < 0) {
            songIndex = tracks.length - 1
        }
        tracks[songIndex]
        // audio.currentTime = 0
        playAudio()
    }
    function nextAudio () {
        songIndex++
        if(songIndex > tracks.length - 1) {
            songIndex = 0
        }
        tracks[songIndex]
        // audio.currentTime = 0
        playAudio()
    }
</script>	
<player class="player">
    <h1 class="z-10 font-mono text-4xl ">Ol' Music Player</h1>
    <img src="img/gramophone.png" alt="" class="gramophone">
        <div class="music-container {isPlaying? 'play': ''}">
            <div class="music-info">
                <h4 id="title"></h4>
                <div class="current-time">00:00</div><div class="total-duration">00:00{audioDuration}</div>
                <div class="progress-container">
                    <div class="progress"></div>
                    <input type="range" min={0} max={100} step={1} bind:value={progress} on:change={updateProgress}>
                    <seek-slider />
                </div>
            </div>
            <audio src='' id="audio" />
            <div class="img-container">
                <img src="img/vinyl_disk.png" alt="music_cover" id="cover">
            </div>
            <div class="navigation">
                <button id="prev" class="action-btn" on:click={prevAudio}>
                    <i class="fas fa-backward"></i>
                </button>
                <button id="play" class="action-btn action-btn-big" on:click={isPlaying? pauseAudio : playAudio}>
                    <i class="fas {isPlaying? 'fa-pause' : 'fa-play'}"></i>
                </button>
                <button id="next" class="action-btn" on:click={nextAudio}>
                    <i class="fas fa-forward"></i>
                </button>
                <button id="loop" class="action-btn" on:click={loopAudio}>
                    <i class="fas fa-arrows-rotate"></i>
                </button>
                <button id="mute" class="action-btn" on:click={muteAudio}>
                    <i class="fas fa-volume-mute"></i>
                </button>
                <div class="Volume">
                    <div class="slider">
                        <input type="range" min={0} max={1} step={0.01} bind:value={volume} on:change={volumeControl}>
                        <volume-slider/>
                        <!-- <div class="progress" style="width: {volume * 100}%"> </div> -->
                        <p>{volume*100}%</p>
                    </div>
                    <input multiple type="file" class="cool_button" on:input={fileInput} accept="audio"/>
                </div>
            </div>
        </div>
        <div>
        {#if tracks}
            <h2>Selected files:</h2>
            {#each Array.from(tracks) as track}
                <p>{track.name} ({track} bytes)</p>
            {/each}
        {/if}
        number of elements is {tracks.length}
        </div>
</player>