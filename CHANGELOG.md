# Euskara Bidea · registro de versiones

Organización de esta carpeta:
- `euskara-bidea.html` → **siempre la última versión**. Desde la v6 es un único archivo autónomo (fuentes e icono incluidos, sin conexión a nada): funciona en Safari, Chrome móvil y escritorio. Para usarlo en el móvil hay que servirlo desde una dirección web (ver la v6).
- `versiones/` → copia de cada versión anterior, con el número y la fecha en el nombre. Si algo se rompe, copia una de ahí encima de `euskara-bidea.html`.
- `CHANGELOG.md` → este registro. Cada versión nueva añade una entrada arriba.

Versión publicada en línea: https://claude.ai/artifact/DjeuCZHTFS6aot5aezrqZy

Nota: tu progreso (XP, racha, lecciones hechas) se guarda en el navegador donde abras la app, no en este archivo.

---

## v26 · 2026-11-07
- **Móvil**: la versión publicada (GitHub Pages) no declaraba el viewport y el móvil la dibujaba a 980 px de ancho, por eso se veía diminuta. Corregido (`width=device-width`).
- Además, en pantallas de hasta 600 px el texto, los botones, las tablas y los ejemplos son algo mayores. Escritorio sin cambios (comprobado: mismo tamaño de letra).

---
## v25 · 2026-11-07
- **A2 con menos castellano**: la pantalla principal pasa a euskera (subtítulos de las casillas, saludo, meta diaria, nivel, logros, formulario «Niri buruz»).
- Lecciones A2 1–7: traducciones visibles. Desde la 8: las traducciones de los ejemplos salen borrosas (tocar para verlas). Desde la 16 se oculta también el subtítulo en castellano.
- A1 no cambia.

---
## v24 · 2026-11-07
- Al terminar cada lección (pantalla de resultado) aparece un **resumen explicado**: lo esencial, cada paso con su explicación, tablas, ejemplos clave, consejos y palabras clave. Disponible en las 55 lecciones.

---
## v23 · 2026-11-06
- **Presente primero, pasado y futuro después**: los ejercicios de conjugación solo usan presente hasta que se completa la lección del pasado (en A2, en el test de nivel y en la autoevaluación sí entran todos los tiempos).
- A1: la lección «Iragana eta geroa» (antes n10, todo junto) se parte en 3, colocadas tras haber asentado el presente y los 4 tipos de verbo (n26–28):
  - **Atzo · izan eta egon** (nintzen, nengoen…) · **Atzo egin nuen** (nuen…, pasado vs «he hecho») · **Bihar egingo dut** (-ko/-go).
- A2: «Geroa eta asmoak» se adelanta junto al pasado (n5) y nueva **Errepasoa · atzo eta bihar** (n20).
- A1: 32 lecciones · A2: 23. El progreso se conserva (va por id).

---
## v22 · 2026-11-06
- 3 lecciones de repaso de los tipos de verbo, colocadas según lo aprendido:
  - A1 · **Errepasoa · NOR eta NORK** (n10, tras «Gustuak eta beharrak»).
  - A1 · **Errepasoa · NOR, NORK, NORI** (n24, tras «Nori eman diozu?»). A1 pasa a 30 lecciones.
  - A2 · **Errepasoa · aditz motak** (n11, tras «Eman zidan»). A2 pasa a 22 lecciones.
- Numeración de lecciones siguientes desplazada; el progreso no se pierde (se guarda por id).

---
## v21 · 2026-11-06 · Los 4 tipos de verbo (NOR, NOR-NORK, NOR-NORI, NOR-NORI-NORK)
- **Gida, sección 8:** tabla con los cuatro tipos (qué participa, auxiliar y ejemplo), cuatro pasos para reconocer el tipo y la diferencia de dirección diot / dit.
- **Practicar:** la baldosa «Nor ala nork?» pasa a **Aditz motak** y ahora tiene 10 preguntas de los cuatro tipos: clasificar verbos (joan, jan, gustatu, eman…) y elegir el auxiliar de una frase (naiz, dut, zait, diot, dit…).
- **Aditzak:** cada verbo muestra su tipo (NOR, NOR-NORK, NOR-NORI, NOR-NORI-NORK) y se unificaron los nombres en las notas.

---

## v20 · 2026-11-06 · Test: saltar de nivel y autoevaluación
- Nueva baldosa **Test** (junto a Gida) con dos opciones; no toca la pantalla principal más allá de esa baldosa.
- **Maila saltatu** (A1 → A2): 40 preguntas (vocabulario 12, verbos 10, frases 10, gramática de las lecciones 8). Se aprueba con **90 % en total (36 aciertos) y 75 % como mínimo en cada bloque**. Sin ayudas ni explicaciones durante el test, ni marca de acierto/fallo por pregunta. Si suspendes, reintento a las 24 h con preguntas distintas. Al aprobar queda «A1 acreditado» y se abre el A2.
- **Autoebaluazioa**: 20 preguntas de A1 o A2, con explicación tras cada respuesta, sin nota mínima; resultado por bloques y lista de lo que conviene repasar (temas de vocabulario, verbos y lecciones). No altera XP ni el dominio de palabras.
- El aviso del candado del A2 menciona ahora el test.

---

## v19 · 2026-11-06 · Engranaje de ajustes
- Engranaje ⚙️ arriba a la derecha: abre la pantalla Ezarpenak (meta diaria, mis datos, código de acceso, copia de seguridad, borrar progreso). Pulsarlo otra vez vuelve al inicio.
- Los ajustes ya no están en la pantalla principal. El engranaje se oculta dentro de lecciones y sesiones.
- Cabecera reajustada para que quepa en móviles estrechos (320–430 px).

---

## v18 · 2026-11-06 · Niri buruz (preguntas personalizadas)
- Primer cuestionario en el inicio: nombre, dónde vives, de dónde eres y fecha de nacimiento (todo opcional, se puede saltar y editar luego en Ezarpenak). Los datos se guardan solo en el navegador de cada persona.
- Saludo con tu nombre («Kaixo, David!») y felicitación el día de tu cumpleaños.
- Nueva baldosa «Niri buruz»: sesión de unas 9 preguntas con tus datos (Ni David naiz · Elizondon bizi naiz · Bilbokoa naiz · martxoaren 12an jaio nintzen · berrogeita bat urte ditut, más las preguntas Zer da zure izena?, Non bizi zara?, Nongoa zara?…).
- Los sufijos de lugar (-n/-en, -koa/-ekoa), el día del mes y la edad en euskera se calculan solos. Con nombres de lugar poco habituales puede fallar alguna terminación.
- Arreglo menor: separación entre los temas del diccionario.

---

## v17 · 2026-11-06 · Nuevo diseño «Pizarra»
- Diseño nuevo elegido entre 3 propuestas: pizarra verde oscuro, tiza blanca con colores pastel, bordes a trazo de tiza y letra manuscrita (Patrick Hand) en títulos; texto en Nunito.
- Solo cambia el aspecto (CSS y fuentes); el contenido y el funcionamiento son los mismos. Ahora es siempre oscuro.
- Las otras dos propuestas (A Aldizkaria, B Bauhaus) quedan en la carpeta `disenos`.

---

## v16 · 2026-11-06 · Animales
- Set «Animaliak» ampliado de 8 a 34 palabras (caballo, perro, gato, vaca, oveja, cabra, cerdo, burro, águila, ciervo, león, rana, serpiente, etc.). Los animales sueltos que estaban en «Baztan eta natura» se movieron ahí.

---

## v15 · 2026-11-06 · A2 completo según planes oficiales
- **Auditoría del A2** contra UNED A2, Gobierno Vasco (programación A2) y HEOC/HABE. Tras pasar lo básico a A1, el A2 quedaba corto (9 lecciones); ahora tiene **21**.
- 12 lecciones nuevas: pasado «a quién» (zidan, zizun, zion…), planes y futuro (-tzeko asmoa), hasi/jarraitu/utzi y dagoeneko/oraindik, opiniones (uste dut, nahiago dut), sufijos (-egi, -tsu, -dun, -txo), estados (irekita dago), describir personas, teléfono y mensajes, pasado con duela/joan den/inoiz, restaurante y alojamiento, plural de los casos (-ek, -ei, -en), ekarri/eraman.
- Verbos nuevos en la pestaña Aditzak (A2): eman (hark… niri, zuri…), ekarri, eraman.
- Vocabulario A2 nuevo: aspecto y carácter, restaurante y alojamiento, tiempo pasado/futuro, opiniones.
- Más frases en Esaldiak.

---

## v14 · 2026-11-06 · A1 completo según planes oficiales + Hiztegia
- **Auditoría del temario A1** contra UNED (guía A1), HEOC/HABE y EHU. Se movieron de A2 a A1 los contenidos que oficialmente son A1: posiciones, imperativos, tiempo atmosférico, hora, comparativos, ahal/ezin, -rekin/-z/-raino, ba-/-nean, preguntas con -al, dativo (eman), compras, salud, etc.
- **A1 pasa a 28 lecciones** (nuevas: números 100–1000 y ordinales, zerbait/ezer/inor, preguntar direcciones, -tzea/-tzeko/-tzera) y **A2 a 9** (relativos, conectores y narración…). Candado A2 más exigente: hay que completar las 28.
- Vocabulario A1 nuevo: direcciones, clase y asignaturas, profesiones, datos personales, partes de la casa, animales, fiestas, informática; más familia, comida, saludos y números. Verbos: jakin, ibili, eman en A1.
- Diptongos añadidos a la lección 1.
- **Hiztegia** (Hitzak → 📖): diccionario de consulta con ~1700 palabras en 28 temas (animales, casa, aparatos, calle, trabajo, verbos, etc.), buscador y 🔊. No entra en las lecciones.
- Nota: el PDF oficial A1 del Gobierno Vasco no se pudo abrir; contrasta el temario con tu profesor.

---

## v13 · 2026-11-06 · A2 ampliado según planes oficiales + código de acceso
- **Código de acceso** (Inicio → Ezarpenak → «Sarbide-kodea»): desbloquea el A2 sin completar el A1, para profesores o para enseñar la app. Código actual: `irakasle2026`. No es seguridad real: está en el código de la página. Se puede desactivar desde el mismo sitio y no se transfiere con la copia de seguridad.
- **A2 adaptado al temario oficial** (HEOC/HABE A2, programación A2 de euskera del Gobierno Vasco y guía UNED Euskara Básico A2): de 8 a **19 lecciones**. Nuevas: Iragana (joan/etorri/egon/ibili), Ohiko iragana y «ari nintzen», Maite zaitut (nau/zaitut/gaitu), Aginduak, Dezaket/naiteke, Norekin?/Zertaz? (-rekin, -z, -raino), Esan du… (-ela, preguntas indirectas), Baldin eta… (ba-, -nean), Eguraldia, Erosketak y Osasuna.
- **Verbos nuevos en Aditzak (A2):** joan (iragana), etorri (iragana), ibili, ahal (dezaket) y ahal (naiteke); se suman a gustatu y eman.
- **Vocabulario A2:** +53 palabras en 6 temas nuevos (Eguraldia, Osasuna, Erosketak, Lana eta ikasketak, Aisialdia, Otorduak): 129 palabras A2 en 14 temas. 29 frases A2 para construir.
- Contenido escrito por Claude a partir del temario: contrástalo con el profesor.

## v12 · 2026-11-06 · Nivel A2 (bloqueado hasta completar el A1) y arreglo del botón de siguiente lección
- **Arreglo:** al terminar una lección la pantalla de resultado solo ofrecía repetirla. Ahora el botón principal es «Hurrengo ikasgaia» (siguiente lección); «Berriro praktikatu» y «releer» siguen disponibles. También se corrige un posible cierre inmediato al saltar de la práctica a releer una lección.
- **Selector de nivel A1 / A2** en Inicio, Ikasgela, Hitzak y Aditzak. El A2 está **bloqueado (🔒)** hasta completar las 12 lecciones del A1 (≥ 60 % en cada una); un progreso importado o guardado en A2 sin cumplirlo vuelve a A1. Nueva insignia «Bigarren maila» al desbloquearlo.
- **Contenido A2 (básico):** 8 lecciones (Non dago? · Nori eman diozu? · Gustatzen zait/zaio · Nahi, behar, ezin · Konparazioak · Zergatik? -lako · Ba al…? · Ordua eta egunerokoa), 8 temas de vocabulario nuevos (76 palabras), verbos gustatu (nor-nori) y eman (nork-nori), 14 frases para construir y repaso propio por nivel.
- El A2 es contenido básico escrito por Claude: contrástalo con tu profesor, sobre todo las formas verbales (zait/zaio…, diot/dizkiot…, -lako).

## v11 · 2026-11-06 · Contenido de clase: fecha, meses, estaciones y adjetivos
- **Vocabulario nuevo (+41 palabras, 157 en total, 13 temas):** Hilabeteak (12 meses), Urtaroak (estaciones, año, mes, semana, día, cumpleaños), Adjektiboak (16 adjetivos con sus opuestos) y 4 palabras más en Egunak eta denbora (goiza, arratsaldea, gaua, data).
- **Lección 12 «Data eta denbora»:** días y meses, estaciones con «-n» (udan, neguan), preguntar y decir la fecha (Zein egun da gaur? / azaroaren 6a), cumpleaños y adjetivos (etxe handia / etxe handi bat). Incluye resumen, palabras clave y 19 preguntas de práctica.
- Cubre lo dado en clase hasta ahora: aurkezpenak, agurrak, izan, galderak, asteartea (días), urtaroak, zenbakiak, adjektiboak y data.

## v10 · 2026-11-06 · Repaso, buscador, palabra del día y copia de seguridad
- **Errepasoa**: sesión de 10 preguntas con tus palabras más flojas (según tu dominio de cada una).
- **Gaurko hitza**: palabra del día en inicio, con botón 🔊 de pronunciación.
- **Buscador** en Hitzak: busca en euskera o en español (sin distinguir tildes) y escucha cada palabra.
- **Ezarpenak** (abajo del inicio): meta diaria 30/50/100/150 XP; **copia de seguridad** (generar código / importar) para pasar el progreso a otro móvil o navegador; borrar progreso con doble pulsación.

## v9 · 2026-11-06 · Logo = inicio
- Pulsar el logo «Euskara Bidea» de la cabecera te lleva siempre a la pantalla principal (desde cualquier pestaña). Dentro de lecciones y sesiones el logo se sustituye por ← Atzera.

## v8 · 2026-11-06 · Botón de volver
- Botón fijo **← Atzera** arriba a la izquierda en lecciones y sesiones de preguntas (sustituye a la ✕ pequeña, que se perdía al hacer scroll).
- Si sales de una sesión a medias aparece una confirmación (Jarraitu / Irten); el XP ganado se conserva. En la primera pregunta o en la pantalla de resultado sale directo.
- El gesto/botón «atrás» del móvil también sale de la lección o sesión en vez de sacarte de la web.
- Web publicada en GitHub Pages: https://pekemtir.github.io/euskara-bidea/

## v7 · 2026-11-06 · Navegación que funciona en el visor de WhatsApp
- Problema: al abrir el archivo desde WhatsApp solo funcionaba el botón rojo; las pestañas y las baldosas no cambiaban de sección. La navegación dependía de la dirección de la página (`#hitzak`…), que ese visor no procesa.
- Ahora la sección activa se guarda en la propia app. La dirección de la página se actualiza solo si el navegador lo permite.
- Reproducido el fallo con la v6 simulando ese visor (se quedaba en Hasiera) y comprobado que la v7 navega bien por todas las secciones.
- Comprobado también con el almacenamiento del navegador bloqueado: la app sigue funcionando (sin guardar el progreso).
- Archivo: `versiones/euskara-bidea_v7_2026-11-06.html`

## v6 · 2026-11-06 · Versión autónoma para Safari y Chrome móvil
- Un solo HTML completo (con doctype, viewport y metadatos de iPhone) con las fuentes incrustadas: no pide nada a internet.
- Compatible con Safari desde iOS 12 (código comprobado como ES2018, sin APIs modernas problemáticas).
- Ajustes táctiles: sin zoom por doble toque, tamaño de texto estable, márgenes de seguridad para el notch y la barra inferior, colores de la barra del navegador en claro y oscuro.
- Icono para «Añadir a pantalla de inicio».
- Probado en Chromium emulando un iPhone 14, sin red: cero peticiones externas, cero errores, sin scroll horizontal, claro y oscuro, el progreso se conserva al recargar. No se ha podido probar en Safari real.
- Misma app que la v5 (la versión web de claude.ai se sincroniza con estos ajustes táctiles).
- Archivo: `versiones/euskara-bidea_v6_2026-11-06.html`

## v5 · 2026-11-06 · Explicación detallada al fallar
- Al fallar aparece la tarjeta «Zergatik? · ¿Por qué?» con la razón de la respuesta correcta.
- Analiza también lo que elegiste o escribiste: de qué verbo, tiempo y persona era tu forma; qué significa la palabra que marcaste; si estabas a una o dos letras; en las frases, en qué palabra se rompió el orden o cuál sobra.
- En conjugación muestra la serie completa del tiempo con la forma correcta resaltada.
- Avisa de que la pregunta volverá a salir al final de la sesión.
- La tarjeta tiene scroll propio y el botón «Jarraitu» siempre visible.
- Probado en Chromium: un fallo de cada tipo (vocabulario con opciones y escrito, conjugación, frase, nor ala nork), sin errores en consola.
- Archivo: `versiones/euskara-bidea_v5_2026-11-06.html`

## v4 · 2026-11-06 · Tarjeta de ayuda en los ejercicios
- Botón «💡 Laguntza» en cada ejercicio; solo se ve la tarjeta si lo tocas.
- La ayuda orienta sin dar la respuesta: tema, primera letra y longitud en vocabulario; verbo y primera letra en conjugación; número de palabras y primera palabra en frases; pista de regla en las preguntas de las lecciones.
- Revisadas ~15.000 preguntas generadas: 450 pistas delataban la respuesta y se corrigieron.
- Archivo: `versiones/euskara-bidea_v4_2026-11-06.html`

## v3 · 2026-11-06 · Resumen y palabras clave por lección
- Paso final «Laburpena» en las 11 lecciones: puntos esenciales y tabla euskera–español de 11–15 palabras.
- Botón para repasar esas palabras con tarjetas.
- Corregido en la lección 11: «jarraian» → «berehala» (enseguida).
- Archivo no conservado (ver nota abajo).

## v2 · 2026-11-06 · Pestaña Ikasgela (11 lecciones)
- Lecciones con objetivos, pasos de explicación con ejemplos y piezas de colores, y práctica final (60 % para completarla, +20 XP).
- Temario: sonidos, izan, artículo y plural, casos de lugar y egon, números, familia y eduki, ukan, hábitos y ari izan, gustatu/nahi/behar, pasado y futuro, situaciones reales.
- Orden adaptado de la guía A1 de la UNED, el programa de nivel inicial de la EHU y el currículo HEOC.
- Logro nuevo «Ikasle saiatua». Siguiente lección sugerida en Hasiera.
- Archivo no conservado (ver nota abajo).

## v1 · 2026-11-06 · App inicial
- Hitzak (vocabulario, 10 temas, tarjetas y preguntas), Aditzak (tablas de conjugación con morfemas en color, laboratorio de verbos), Esaldiak (ordenar frases, nor ala nork), Gida (gramática).
- XP, nivel, racha de días, meta diaria, logros y confeti.
- Archivo no conservado (ver nota abajo).

---

Nota sobre v1–v3: no se guardó copia de esos archivos en su momento, porque se editaba siempre el mismo fichero. El archivo versionado empieza en v4. A partir de ahora, cada cambio genera una copia nueva en `versiones/` antes de sustituir la última.
