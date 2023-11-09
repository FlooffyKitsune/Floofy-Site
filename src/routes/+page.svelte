<script lang="ts">

</script>

<svelt:head>
    <title>Floofy | Home</title>
</svelt:head>

<main>
    <div>
        <h1 class="hidden">Home</h1>
        <div class="Temp">
            <img src="./images/svg/FloofyLogo.svg"  class="TempFloofyLogo" alt="Floofy Logo" />
            <h2>Coming Soon...</h2>
            <a href="/card">View My Card</a>
        </div>
        <div class="scroll-container">
            <div class="scroll">
                <div>
                    <span>Web Design</span>
                    <span>*</span>
                    <span>Web Development</span>
                    <span>*</span>
                    <span>UI/UX</span>
                    <span>*</span>
                </div>
                <div>
                    <span>Web Design</span>
                    <span>*</span>
                    <span>Web Development</span>
                    <span>*</span>
                    <span>UI/UX</span>
                    <span>*</span>
                </div>
            </div>
            <div class="scroll">
                <div>
                    <span>Illustration</span>
                    <span>*</span>
                    <span>Logos</span>
                    <span>*</span>
                    <span>Graphic Design</span>
                    <span>*</span>
                </div>
                <div>
                    <span>Illustration</span>
                    <span>*</span>
                    <span>Logos</span>
                    <span>*</span>
                    <span>Graphic Design</span>
                    <span>*</span>
                </div>
            </div>
            <div class="scroll">
                <div>
                    <span>Character Design</span>
                    <span>*</span>
                    <span>3D Modeling</span>
                    <span>*</span>
                    <span>Content Creation</span>
                    <span>*</span>
                </div>
                <div>
                    <span>Character Design</span>
                    <span>*</span>
                    <span>3D Modeling</span>
                    <span>*</span>
                    <span>Content Creation</span>
                    <span>*</span>
                </div>
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Unna&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@500;700&display=swap');

    // Temp Stuff
    .Temp {
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        z-index: 1;

        .TempFloofyLogo {
            width: 30%;
            margin-bottom: 3rem;
        }

        h2 {
            font-family: 'Ubuntu', sans-serif;
            font-size: 3rem;
            color: #fff;
        }

        a {
            font-family: 'Ubuntu', sans-serif;
            font-size: 1.5rem;
            color: #fff;
            text-decoration: none;
            margin-top: 2rem;
            border: 3px solid #fff;
            padding: 1rem 2rem;
            border-radius: 15px;
            transition: all 0.3s ease-in-out;
        }

        a:hover {
            background-color: #fff;
            color: #000;
        }
    }

    // General Styling
    * {
        padding: 0;
        margin: 0;
    }

    .hidden {
        position: absolute;
        top: -1000px;
    }

    //Scroll
    .scroll-container {
        position: fixed;
        top: 0;
        overflow: hidden;
        white-space: nowrap;
        z-index: -1;

            .scroll div {
            display: inline-block;
            animation: 20s scroll linear infinite;

            span {
                font-family: 'Inknut Antiqua', serif;
                color: #505458;
                font-size: 20vh;
                display: inline-flex;
                margin: 10px;
                line-height: 1.5;
            }
        }
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        } to {
            transform: translateX(-100%);
        }
    }
</style>