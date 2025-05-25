<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spaghetti Dinner Records</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
        }
        header {
            padding: 40px 20px 20px;
            width: 100%;
            position: relative;
        }
        nav {
            position: absolute;
            top: 40px;
            right: -300px;
            white-space: nowrap;
            animation: slide-in 1.5s forwards ease-out;
        }
        @keyframes slide-in {
            to {
                right: 20px;
            }
        }
        main {
            margin-top: 60px;
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        #slideshow img {
            width: 1100px;
            height: 430px;
        }
        .bottom-section {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 40px;
            width: 100%;
        }
        .bottom-section > div {
            max-width: 500px;
        }
        .bottom-section video {
            width: 100%;
        }
        .about {
            padding-left: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1 style="font-size: 3em; margin: 0;">Spaghetti Dinner<br>Records</h1>
        <nav>
            <a href="#" style="margin-right: 20px;">ARTISTS</a>
            <a href="#" style="margin-right: 20px;">VIDEO</a>
            <a href="#">MUSIC VIDEO</a>
        </nav>
    </header>

    <main>
        <div class="container">
            <!-- Slideshow container -->
            <div id="slideshow">
                <img src="placeholder.png" alt="Slideshow" id="slide">
            </div>

            <!-- Bottom section -->
            <div class="bottom-section">
                <div>
                    <video controls>
                        <source src="placeholder.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="about">
                    <h2>ABOUT</h2>
                    <p>--------------------</p>
                    <p>--------------------</p>
                    <p>--------------------</p>
                    <p>--------------------</p>
                    <p>--------------------</p>
                </div>
            </div>
        </div>
    </main>

    <script src="slideshow.js"></script>
</body>
</html>
