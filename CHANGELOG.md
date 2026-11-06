# Euskara Bidea · registro de versiones

Organización de esta carpeta:
- `euskara-bidea.html` → **siempre la última versión**. Desde la v6 es un único archivo autónomo (fuentes e icono incluidos, sin conexión a nada): funciona en Safari, Chrome móvil y escritorio. Para usarlo en el móvil hay que servirlo desde una dirección web (ver la v6).
- `versiones/` → copia de cada versión anterior, con el número y la fecha en el nombre. Si algo se rompe, copia una de ahí encima de `euskara-bidea.html`.
- `CHANGELOG.md` → este registro. Cada versión nueva añade una entrada arriba.

Versión publicada en línea: https://claude.ai/artifact/DjeuCZHTFS6aot5aezrqZy

Nota: tu progreso (XP, racha, lecciones hechas) se guarda en el navegador donde abras la app, no en este archivo.

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
