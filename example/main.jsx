/* Copyright 2017 Esri
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import React from 'react';
import { render } from 'react-dom';
import esriLoader from 'esri-loader';

import { SceneView, Scene, Layer, UI, Ground } from 'react-sceneview'; // eslint-disable-line

esriLoader.loadCss('https://js.arcgis.com/4.7/esri/css/main.css');


render(
  <SceneView id="sceneview" onClick={e => console.log(e)}>
    <UI.Zoom />
    <UI.Compass />
    <Scene basemap="gray-vector">
      <Ground
        opacity={0.5}
        navigationConstraint={{ type: 'none' }}
      />
      <Scene.Layer
        id="buildings"
        layerType="scene"
        zoomTo
        selectable
        url="https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Building_Montreal/SceneServer"
      />
    </Scene>
  </SceneView>,
  document.getElementById('root'),
);
