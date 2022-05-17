# Futtató környezet

A programom futtatásához szügséges néhány program.
A Backend-hez és a Client-hez szügséges a dbforge studio, xampp, visual studio code, node js, git, Visual Studio Code.
a letöltésükhöz itt lesznek az információk.

## Git bemutatása: 
A Git egy nyílt forráskódú verziókövető rendszer. Az ilyen jellegű projektekben való együttműködést a tárházakban lévő fájlok elosztott verziókövetésével valósítja meg.
A Git lényegében lehetővé teszi több közreműködő egy adott időszakban egy adott tárházban elvégzett munkafolyamatainak integrálását.

## git letöltése/telepítése: 
A letöltése nagyon egyszerű a linkre kattintva letölthető. a telepítőt elindítva a telepítés során egy dolgot kell kipipálni hogy a jobb klick-re jelenjen meg a git bash. 
Egyéb mást nem kell átállítani ha készen van akkor csak bezárja és egyből tesztelheti is új fájlra rákattintva megjelenik a git bash opció.
Az xammp letöltő linkje: https://git-scm.com/

## node js bemutatása: 
NodeJs egy olyan futtató környezet, ami lehetőséget nyújt JavaScriptben írt programook futtatására szervereken. A JavaScriptet leginkább a kliens oldalon
szokták használni, a böngészőn keresztül de a mi esetünkben a Backendben is használni fogjuk.

## node js letöltése/telepítése: 
Először töltsd le a linkre kattintva a node js-t. Válazd az LTS-t (hosszú távú támogatás).
Miután kiválasztottuk az igényeinek megfelelő verziót, futtassd a telepítőt. Kövesse az utasításokat a telepítési útvonal kiválasztásához,
és győződjön meg arról, hogy az npm csomagkezelő szolgáltatás szerepel-e a Node.js futásidejében.
Ez legyen az alapértelmezett konfiguráció.
A node js letölttő linkje: https://nodejs.org/en/

## Xampp bemutató: 
Ez egy szerver szolgáltató szoftver amivel a saját számítógépen lehet saját szervert futtatni ami kiszolgál minket különböző programok lefuttatása közben.
Az ön esetében is ez a helyzet a Mysql és az apach szervert elindítva kiszolgál bennünket majd a program futása közben is. A dbforge-ban ezzel tudunk
rácsatlakozni az adatbázisunkra az Xampp hiányában nem fog működni semmi. Mert az xampp nem szolgál ki bennünket.

## Xampp letöltése/telepítése: 
Nagyon egyszerű az xampp letöltése a linkre kattintva töltse le majd indítsa el a telepítőt. A telepítőben semmit nem kell módosítani csak a tovább gombra kattintva
menjen tovább. majd ha feltelepűlt akkor indítsa el a szervereket.
Az xampp letöltő linkje: https://www.apachefriends.org/hu/index.html

## DbForgeMySql Bemutatása: 
Ez egy adatbázis kezelő szoftver amiben tetszés szerűen generálhatunk adatbázisokat, táblákat, adatokat és ezekkel az adatokkal dolgozhatunk.
A dbforgeMySql program azért kell nekünk hogy a programomban lévő összes adatot oda letárolhassuk és majd a programban kérdezgethessük ezeket az adatokat.

## DbForgeMySql letöltése/telepítése: 
A letöltése nagyon egyszerű a linkre kattintva a jobb szélső ingyenes verziót kell letölteni. Majd a telepítés során csak a tovább gombra kattintva
fel is lehet telepíteni. Majd a telepítés után indítsa el az xampp-ot és startolja el a Mysql szervert mert ez fog minket kiszolgálni majd elindíthatod a programot
és már generálható az datbázis azokba táblákat lehett kreálni és adatokkal is fel lehet tölteni és utána nyugott szívvel lehet lekérdezéseket írni.
A dbforge studio letöltő linkje: https://www.devart.com/dbforge/mysql/studio/editions.html

## Visual Studio Code bemutatása: 
A Visual Studio Code egy könnyedén kezelhető, multiplatformos és sokoldalú kódszerkesztő, programozó felület.
A program számos kódnyelvet ismer, köztük: C++, jade, PHP, Python, XML, Batch, F#, DockerFile, Coffee Script, Java, HandleBars, R, Objective-C,
PowerShell, Luna, Visual Basic, Markdown, JavaScript, JSON, HTML, CSS, LESS, SASS, C#, TypeScript. Néhányuknál képes vizuális megjelenítésre és futtatásra is.

## Visual Studio Code letöltése/telepítése: 
Nagyon egyszerű letölteni és telepíteni a linkre kattintva a windows-os szoftvert kell letölteni. Majd indíttsa el a telpítőt és kattintson a tovább kombra nem kell
semmit se átállítani. Vannak benne egyéb kiegészítők amiket a programomhoz kötelezőek letölteni! A program elindításával megjelenik baloldalt egy kis négyzet
aminek a neve Extensions ezeket ajánlom hogy töltse le: Beautify, Live Server, Markdown Preview, View in Browser, Mysql (delfines iconnal jelölt), Vetur
A Visual Studio Code letöltő linkje: https://code.visualstudio.com/download

## A programom futtatása lépésekben: 
1. Még mielött bármit is tenne nyissa meg az xamppot és startolja el a Mysql szervert és az Apach szervert. 
2. Ha ez meg van kövesse a következő utasításokat!
Hozzon létre a saját számítógépén egy mappát majd menjen bele. jobb click a semmibe és használja a git bash-st. majd írja be hogy "git clone https://github.com/TyapTyap/DiabloDrinks.git"
Ezek után lehúzza az adatokat a felhőböl. Ezek után kattintson rá balclick-kel a Backend fájlra majd jobbk click-rá használja a visual studio code-ot
ezt tegye meg a Client mappával is.
Amikor betöltött a Visual Studio nyomja meg a ctrl+ö gombkombinációt. Amiután előjött a node js akkor a jobb oldalt válassza ki a git bash-t és írja be hogy
"npm i" ezzel a parancsal letölti a megfelelő fájlokat a programhoz majd ha kész akkor írja be azt hogy "npm run dev" ezzel elindítja a Backend szervert.
Ezt a műveletet hasonló módon a Client fájlon is megkell csinálni. Ha elindította a fájl-t visual studio-val akkor nyomja meg a ctrl+ö gomb kombinációt
írja be ismét hogy "npm i" majd ha végzett akkor írja be hogy "npm run serve" ezzel indítja el a Client szervert majd amit kiírt linkre kattintva 
ctrl+bal egér gombbal megnyitható. Megjelenik a honlap az után már mindedn egyértelmű.
