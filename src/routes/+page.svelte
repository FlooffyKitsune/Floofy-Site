<script lang="ts">
import MdiProgressHelper from '~icons/mdi/progress-helper';

function showPopup() {
    alert("Message wafflecat on discord for your own page.");
}
</script>

<svelt:head>
    <title>Floofy | Home</title>
</svelt:head>

<header>
    <img src="./images/svg/FloofyLogoSmall.svg" alt="Floofy Logo">
    <div class="nav-wrapper">
        <a href="/card">My Card</a>
        <a href="javascript:void(0);" on:click={showPopup}>Request a Page</a>
    </div>
</header>

<main>
    <div class="landing-container">
        <div class="landing-text">
            <h1>Project Floofy</h1>
            <p>In 2024 I met most of my goals. Problem is, I have nothing to show for it. This year I want to change that by having a clear path/plan and something to show for each accomplishment. That's where this site comes in. Below is a list of goals that I can only add to, not delete items from. In addition, there is a showcase section below that where items that meet my goals will be displayed.</p>
            <p>Just for fun I am adding the option for you to have a page on this site as well to track your own progress, too. For the moment it will be manually maintained by me until I figure out a better automated method.</p>
        </div>
        <img src="./images/floofy-mascot.png" alt="Floofy Mascot" class="landing-mascot">
    </div>
    <div class="goals">
        <h2>Goals</h2>
        <ul>
            <li><p>Complete Coloso Courses</p><MdiProgressHelper style="font-size: 2.5rem; color: white"/></li>
            <li><p>Learn to Animate (3D)</p><MdiProgressHelper style="font-size: 2.5rem; color: white"/></li>
            <li><p>Launch a YouTube Channel</p><MdiProgressHelper style="font-size: 2.5rem; color: white"/></li>
            <li><p>Publish Works on Twitter and Portfolio Consistently</p><MdiProgressHelper style="font-size: 2.5rem; color: white"/></li>
        </ul>
    </div>
</main>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Unna&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@500;700&display=swap');

    @font-face {
        font-family: "Nostromo";
        font-style: normal;
        font-weight: 400;
        src: url("$lib/fonts/nostromo-regular-black.otf");
    }
    @font-face {
        font-family: "Nostromo Outline";
        font-style: normal;
        font-weight: 400;
        src: url("$lib/fonts/nostromo-outline-black.otf");
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

    header {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        background-color: #23272A;

        img {
            width: 5%;
        }

        .nav-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;

            a {
                font-family: "Ubuntu", sans-serif;
                font-size: 1.5rem;
                color: white;
                text-decoration: none;
                margin-right: 2rem;
                border: 3px solid white;
                border-radius: 50px;
                padding: 0.25rem 1rem;
                transition: background-color 0.3s, color 0.3s;
            }

            a:hover {
                background-color: white;
                color: #23272A;
            }
        }
    }

    .landing-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 45rem;
        background-image: url("$lib/images/landing.jpg");
        background-size: cover;

        .landing-text {
            border-radius: 8px;
            backdrop-filter: blur(5px);
            background-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.3);

            margin: 3rem;
            margin-right: 15rem;
            padding: 2rem;
            flex: 1;

            h1 {
                font-family: "Nostromo", sans-serif;
                font-size: 3rem;
                margin-bottom: 1rem;
            }

            p {
                font-family: "Ubuntu", sans-serif;
                font-size: 1.5rem;
                margin-top: 1rem;
            }
        }

        .landing-mascot {
            width: 15%;
            align-self: flex-end;
            padding-right: 10rem;
            align-self: center;
        }
    }

    .goals {
        margin: 2rem 0 2rem 2rem;
        padding: 2rem 0 2rem 2rem;

        h2 {
            font-family: "Nostromo Outline", sans-serif;
            color: white;
            font-size: 5rem;
        }

        ul {
            list-style-type: none;

            li {
                background-image: linear-gradient(to right, #845ec2, #dcb0ff);
                border-radius: 60px 0 0 60px;
                margin: 1rem 0 3rem 1rem;
                padding: 2rem 3.5rem 2rem 5rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                p {
                    font-family: "Nostromo", sans-serif;
                    color: white;
                    font-weight: 700;
                    font-size: 1.5rem;
                }
            }
        }
    }
</style>