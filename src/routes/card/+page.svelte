<script lang="ts">
    import FaTwitter from '~icons/fa/twitter';
    import FaGithub from '~icons/fa/github';
    import FaTwitch from '~icons/fa/twitch';
    import FaYoutube from '~icons/fa/youtube';
    import FaHeart from '~icons/fa/heart';
    import SiKofi from '~icons/simple-icons/kofi';
    import SiDiscord from '~icons/simple-icons/discord'

    import FloofyLogo from '$lib/images/svg/FloofyLogo.svg';
    import WaffleCat from '$lib/images/wafflecat.png';
    import Floofy from '$lib/images/floofy.png';
</script>

<main>
    <div class="card-background">
        <h1 class="hidden">Links</h1>
        <div class="card-container">
            <div class="card">
                <div class="card-content">
                    <img src={FloofyLogo}  class="FloofyLogo" alt="Floofy Logo" />
                    <div class="card-profiles">
                    <div class="card-profile">
                        <img src={WaffleCat} class="profile-pic" alt="WaffleCat Profile Pic" />
                        <p class="profile-desc">WaffleCat</p>
                    </div>
                    <div class="card-profile">
                        <img src={Floofy} class="profile-pic" alt="Floofy Profile Pic" />
                        <p class="profile-desc">FloofyKitsune</p>
                    </div>
                    </div>
                    <div class="card-socials">
                    <div class="twitter-buttons">
                        <div class="twitter-button">
                        <a href="https://twitter.com/wafflecat_" target="_blank">
                            <FaTwitter />
                            <span>Twitter</span>
                        </a>
                        </div>
                        <div class="twitter-button">
                        <a href="https://twitter.com/flooffykitsune" target="_blank">
                            <FaTwitter />
                            <span>Twitter</span>
                        </a>
                        </div>
                    </div>
                    <ul class="card-wrapper">
                        <li class="card-button">
                        <a href="https://github.com/FlooffyKitsune" target="_blank">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        </li>
                        <li class="card-button">
                        <a href="https://www.twitch.tv/wafflecat_" target="_blank">
                            <FaTwitch />
                            <span>Twitch</span>
                        </a>
                        </li>
                        <li class="card-button">
                        <a href="https://www.youtube.com/channel/UCOHkDQr6nzGeU84YY7ndiRw" target="_blank">
                            <FaYoutube />
                            <span>Youtube</span>
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div class="card-support">
                    <div>
                        <p>Support Me!</p>
                        <ul class="card-wrapper">
                        <li class="card-button">
                            <a href="https://streamlabs.com/wafflecat_" target="_blank">
                            <FaHeart />
                            <span>Donate</span>
                            </a>
                        </li>
                        <li class="card-button">
                            <a href="https://ko-fi.com/flooffykitsune" target="_blank">
                            <SiKofi />
                            <span>Buy Me a Coffee</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="card-contact">
                        <h2>Contact Me</h2>
                        <a href="mailto: flooffykitsune@proton.me">flooffykitsune@proton.me</a>
                        <div>
                            <SiDiscord />
                            <p>wafflecat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Unna&display=swap');

    // General Styling
    * {
        padding: 0;
        margin: 0;
    }

    .hidden {
        position: absolute;
        top: -1000px;
    }

    // Card Styling
    .card-background {
        background-color: #23272A;
    }
    
    .card-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
        padding: 1.6875rem;
    }

    .card {
        display: flex;
        position: relative;
        max-width: 100%;
        align-items: center;
        justify-content: center;
        flex-grow: 0;
        flex-shrink: 0;
        text-align: left;
        background-color: #2C2F33;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 1rem;
        transition: opacity 1s ease 0s,transform 1s ease 0s;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        border-radius: inherit;
        padding: 2.875rem 3.375rem;
        max-width: 100%;
        width: 37rem;
    }

    .FloofyLogo {
        max-width: 350px;
        margin: 0.5rem 3rem;
    }

    .card-profiles {
        max-width: 100%;
        margin: 1.5rem auto;
        display: flex;
        flex-direction: row;
        align-items: center;

        .card-profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-bottom: #fff solid 1px;


            .profile-pic {
                max-width: 200px;
                margin: 0 30px;
                border-radius: 50%;
            }

            .profile-desc {
                font-family: 'Ubuntu', sans-serif;
                color: #fff;
                font-size: 1.5rem;
                margin: 1rem 0;
            }
        }
    }

    .card-wrapper {
        list-style: none;   
        
        .card-button {
            margin: 1rem 0;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            background-color: #9b84ec;
            font-size: 1.5rem;
            letter-spacing: 0.1rem;
        
            a {
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                justify-content: space-between;
                text-decoration: none;
                font-family: 'Unna', serif;
                color: #fff;
            }
        }

        .card-button:hover {
            background-color: #7965c9;
        }
    }

    .card-socials {
        width: 450px;
        margin-bottom: 1.5rem;

        .twitter-buttons {
            width: 100%;
            margin-top: 1rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .twitter-button {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                font-size: 1.5rem;
                letter-spacing: 0.1rem;
                color: #fff;

                a {
                    padding: .5rem 1rem;
                    border-radius: 2rem;
                    background-color: #9b84ec;
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    justify-content: space-between;
                    text-decoration: none;
                    font-family: 'Unna', serif;
                    color: #fff;

                    span {
                        margin-right: 4.5rem;
                    }
                }

                a:hover {
                    background-color: #7965c9;
                }
            }
        }
    }

    .card-support p, .card-contact h2 {
        text-align: center;
        font-family: 'Ubuntu', sans-serif;
        color: #fff;
        font-size: 1.5rem;
        margin: 1rem 0;
    }

    .card-support {
        padding-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 520px;
        border-top: #fff solid 1px;
        border-bottom: #fff solid 1px;

        ul {
            margin-bottom: 2rem;
        }

        div {
            background-color: #37393e;
            width: 450px;
            margin-top: 1.5rem;
            padding: 0 35px;
            border-radius: 2.125rem;
        }
    }

    .card-contact{
        font-family: 'Ubuntu', sans-serif;
        color: #fff;
        text-align: center;
        padding: 0.5rem;

        a {
            color: #fff;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;

            p {
                margin-left: 0.5rem;
            }
        }
    }

    @media only screen and (max-width: 736px) {
        .card-container {
            padding: 1rem;
        }
        
        .card-profiles .card-profile {
            border-bottom: none;

            .profile-pic {
                max-width: 11rem
            }
        }

        .card-socials {
            width: 100%;
            
            .twitter-buttons {
                width: auto;

                .twitter-button {
                    padding: 0 5px;
                }

                .twitter-button a span {
                    margin-right: 12vw;
                }   
            }

            .twitter-buttons, .card-wrapper {
                padding: 0 1.5rem;
            }
        }

        .card-support, .card-support div {
            width: auto;

            .card-button a span {
                margin-right: 5px;
            }
        }
    }

    @media only screen and (max-width: 500px) {
        
        .card-profiles .card-profile .profile-pic {
            max-width: 7rem
        }

        .card-socials .twitter-buttons .twitter-button a span {
                    margin-right: 5px;
        }   
    } 
</style>