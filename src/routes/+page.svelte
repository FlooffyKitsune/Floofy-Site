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
    </div>
</main>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Unna&display=swap');

    // Temp Stuff
    .Temp {
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;

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
</style>