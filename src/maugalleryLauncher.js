let _asyncLauncher = {
  'obj_Config': {
    'boostrapIsAsyncLoadedSomewhereElseInMyCodebasePleaseDoNotAsyncLoadItHereImBeggingYou': false,

    'mauGalleryGlobalConfig': {
      'mauPrefixClass': 'mau',
      'lightboxId': 'myAwesomeLightbox',
      'prevImgButtonLabel': 'Previous image',
      'nextImgButtonLabel': 'Next image',
      'disableFiltersButtonLabel': 'All',
      'modalTriggerClass': 'modal-trigger',
      'galleryItemClass': 'gallery-item',
      'modalWrapperClass': 'modal-component',
      'galleryPlaceHolderClass': 'gallery-placeholder',
      'styles': {
        'animation': {
          'modal': {
            'arrowTransitionDelay': '.4s'
          }
        },
        'modal': {
          'navigation': {
            'arrowBoxesSizeObj': { size: '50', unit: 'px' }
          }
        }
      }
    },

    'mauGalleriesConfig': [{
      'columns': {
        'xs': 1,
        'sm': 2,
        'md': 3,
        'lg': 3,
        'xl': 3
      },
      'lightBox': true,
      'navigation': true,
      'showTags': true,
      'galleryRootNodeId': 'maugallery',
      'tagsPosition': 'top',
      'mutableOptions': false
    },
    {
      'columns': {
        'xs': 1,
        'sm': 2,
        'md': 3,
        'lg': 3,
        'xl': 3
      },
      'lightBox': true,
      'navigation': true,
      'showTags': true,
      'galleryRootNodeId': 'maugallery-dalle',
      'tagsPosition': 'top',
      'mutableOptions': false
    },
    {
      'columns': {
        'xs': 1,
        'sm': 2,
        'md': 3,
        'lg': 3,
        'xl': 3
      },
      'lightBox': true,
      'navigation': false,
      'showTags': true,
      'galleryRootNodeId': 'maugallery-without-navigation-example',
      'tagsPosition': 'bottom',
      'mutableOptions': false
    },
    {
      'columns': {
        'xs': 1,
        'sm': 2,
        'md': 3,
        'lg': 3,
        'xl': 3
      },
      'lightBox': true,
      'navigation': true,
      'showTags': true,
      'galleryRootNodeId': 'maugallery-vg',
      'tagsPosition': 'top',
      'mutableOptions': false
    },
    {
      'columns': {
        'xs': 1,
        'sm': 2,
        'md': 3,
        'lg': 3,
        'xl': 3
      },
      'lightBox': true,
      'navigation': true,
      'showTags': false,
      'galleryRootNodeId': 'maugallery-vg-disabled-filters',
      'tagsPosition': 'top',
      'mutableOptions': false
    },
    {
      'columns': {
        'xs': 1,
        'sm': 2,
        'md': 3,
        'lg': 3,
        'xl': 3
      },
      'lightBox': false,
      'navigation': false,
      'showTags': false,
      'galleryRootNodeId': 'maugallery-vg-disabled-filters-disabled-modal',
      'tagsPosition': 'top',
      'mutableOptions': false
    }
    ],

    'customAsyncBootstrapLoadTimeout': undefined,
    'defaultCheckRequiredFeaturesTimeout': 2500,
    'defaultMaximumPackageFetchRetry': 50,
    'defaultRetryFetchPackageDelay': 50,
    'ignoreDOMContentLoaded': true,
    'ignorePotentialInjectionSecuritiesChecks': true,
    'ASYNC_LAUNCHER_DEBUG_MODE': false,
    'ASYNC_LAUNCHER_DEBUG_MODE_FORMATTED_MSG': true,
    'needles': {
      'bootstrap': '/npm/bootstrap@'
    }
  },

  'obj_PKGData': {
    'bootstrap': {
      'name': 'Bootstrap v5.2.3 (JS)',
      'url': 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
      'requiredFeatures': ['bootstrap.Modal', 'bootstrap.Carousel'],
      'integrity': 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4',
      'crossorigin': 'anonymous'
    },

    'mauGallery': {
      'name': 'MauGallery',
      'url': './assets/maugallery.js',
      'requiredFeatures': ['bootstrap.Modal', 'bootstrap.Carousel', '_mauGalleryManager']
    }
  },

  'attr_WaitCounter': 0,
  'attr_DOMContentLoaded': false,

  'mauGalleryCallbacks': [
    function injectGlobalConfig() {
      Object.assign(_asyncLauncher.obj_Config['mauGalleryGlobalConfig'], _mauGalleryManager['mauGalleryGlobalConfig']);
      Object.assign(_mauGalleryManager['mauGalleryGlobalConfig'], _asyncLauncher.obj_Config['mauGalleryGlobalConfig']);
      Object.freeze(_mauGalleryManager['mauGalleryGlobalConfig']);
    },

    function runMauGallery() {
      _asyncLauncher.obj_Config['mauGalleriesConfig'].forEach(conf => new _mauGalleryManager.MauGallery(conf));
    }
  ],

  'class_Package':
    class Package {
      constructor(name, url, requiredFeatures, opt = {}) {
        this.name = name;
        this.url = url;
        this.requiredFeatures = requiredFeatures;
        this.options = {
          'conflictFeatures': [],
          'killswitchOnAnyFeatureConflictPolicy': true,
          'injectionProperties': {
            'errorCallbacks': [],
            'alreadyAsyncLoadedSomewhereElse': undefined,
            'checkRequiredFeaturesTimeout': undefined,
            'retryFetchPackageDelay': undefined,
            'maximumPackageFetchRetry': undefined,
            'inlineInject': undefined,
            'crossOrigin': undefined,
            'integrity': undefined,
            'async': undefined,
            'defer': undefined
          },
          'postInject': {
            'postInjectExecutionCallbacks': [],
            'conflictFeatures': [],
            'killswitchOnAnyFeatureConflictPolicy': true
          }
        }

        Object.assign(this.options, opt);

        if (!this.options.injectionProperties['checkRequiredFeaturesTimeout']) {
          this.options.injectionProperties['checkRequiredFeaturesTimeout'] = _asyncLauncher.obj_Config['defaultCheckRequiredFeaturesTimeout'];
        }

        if (!this.options.injectionProperties['maximumPackageFetchRetry']) {
          this.options.injectionProperties['maximumPackageFetchRetry'] = _asyncLauncher.obj_Config['defaultMaximumPackageFetchRetry'];
        }

        if (!this.options.injectionProperties['retryFetchPackageDelay']) {
          this.options.injectionProperties['retryFetchPackageDelay'] = _asyncLauncher.obj_Config['defaultRetryFetchPackageDelay'];
        }

        this.inlineCode = undefined;
        this.ready = undefined;
      }
    },

  'class_PackageAndItsDependencies':
    class PackageAndItsDependencies {
      constructor(targetPackage, dependencies) {
        this.targetPackage = targetPackage;
        this.dependencies = new Set();
        dependencies.forEach(dependency => {
          this.dependencies.add(dependency);
        });
      }
    },

  'function_Installer': async (packageAndItsDependencies) => {
    const doNotInjectInDOMStatus = 999;
    const alreadyLoadedInWindowStatus = 998;

    function getTimerCurrentValue() {
      return _asyncLauncher['attr_WaitCounter'];
    }

    function increaseTimer(increaseAmount) {
      _asyncLauncher['attr_WaitCounter'] += increaseAmount;
    }

    function resetTimer() {
      _asyncLauncher['attr_WaitCounter'] = 0;
    }

    async function wait(ms) {
      await new Promise(resolve => setTimeout(resolve, ms));
      increaseTimer(ms);
    }

    async function runCallbacksCollectionSequentially(callbacks) {
      if (Array.isArray(callbacks)) {
        for (const f of callbacks) {
          await f();
        }
      }
    }

    function alreadyInDOM(url, needle = undefined) {
      if (needle) {
        const matchingNeedleDOMElement = document.querySelector(`script[src*="${needle}"]`);
        if (matchingNeedleDOMElement) {
          return matchingNeedleDOMElement;
        }
      }
      return document.querySelector(`script[src="${url}"]`);
    }

    function anyRequiredFeatureFoundInWindow(requiredFeatures) {
      if (requiredFeatures.length === 0) {
        return false;
      }

      for (const feature of requiredFeatures) {
        try {
          eval(feature.toString());
          return feature;
        } catch { } finally {
          const decompositionTokens = feature.split('.');
          let brokeTheChain = false;
          let oldObj = {};
          for (t of decompositionTokens) {
            oldObj = oldObj[t] ?? window[t];
            if (!oldObj) {
              brokeTheChain = true;
              break;
            }
          }
          if (brokeTheChain) {
            return feature;
          }
        }
      }

      return false;
    }

    function requiredFeaturesFoundInWindow(requiredFeatures) {
      if (requiredFeatures.length === 0) {
        return false;
      }

      for (const feature of requiredFeatures) {
        let succesfullyEvaluated = false;
        try {
          eval(feature.toString());
          succesfullyEvaluated = true;
        } catch { } finally {
          if (succesfullyEvaluated) {
            continue;
          }
          const decompositionTokens = feature.split('.');
          let oldObj = {};
          for (t of decompositionTokens) {
            oldObj = oldObj[t] ?? window[t];
            if (!oldObj) {
              return false;
            }
          }
        }
      }
      return true;
    }

    function skipPostInjectExecutionCallbacksCode(postInject) {
      if (postInject['killswitchOnAnyFeatureConflictPolicy']) {
        const conflictFeatureFound = anyRequiredFeatureFoundInWindow(postInject['conflictFeatures']);
        if (conflictFeatureFound) {
          _asyncLauncher.function_Debugger(`Did not append the postInjectCallback: found ${conflictFeatureFound}`);
          return true;
        }
      } else {
        if (requiredFeaturesFoundInWindow(postInject['conflictFeatures'])) {
          _asyncLauncher.function_Debugger('Did not append the postInjectCallback: found ALL the conflict features!');
          return true;
        }
      }
      return false;
    }

    async function fetchPackage(package) {
      const isErrorResponse = (responseStatus) => responseStatus >= 400 && responseStatus <= 599

      async function processFetch(package) {
        try {
          const response = await fetch(url);
          if (isErrorResponse(response.status)) {
            throw new Error(`Failed to fetch ${package['name']}!\nGot an error response: ${response.status}\nVisit https://http.cat to know what it means.`);
          }
          if (package.options.injectionProperties['inlineInject']) {
            package['inlineCode'] = await response.text();
          }
        } catch (error) {
          throw error;
        }
      }

      function getNeedle(packageName) {
        let needle = undefined;

        for (const needleKey of Object.keys(_asyncLauncher.obj_Config['needles'])) {
          if (packageName.toLowerCase().includes(needleKey)) {
            needle = _asyncLauncher.obj_Config['needles'][needleKey];
            break;
          }
        }
        return needle;
      }

      const url = package.url;
      const requiredFeatures = package['requiredFeatures'];
      let needle = getNeedle(package['name']);
      if (package.options.injectionProperties['alreadyAsyncLoadedSomewhereElse']) {
        _asyncLauncher.function_Debugger(`Didn't fetch ${package['name']} because of the 'alreadyAsyncLoadedSomewhereElse' injection property of this package.`);
        return doNotInjectInDOMStatus;
      } else if (requiredFeaturesFoundInWindow(requiredFeatures)) {
        if (_asyncLauncher.obj_Config['ASYNC_LAUNCHER_DEBUG_MODE']) {
          const becuzMsg = 'because ALL the following required features has been found in the `window` object:';
          let requiredFeaturesStr = '';
          if (_asyncLauncher.obj_Config['ASYNC_LAUNCHER_DEBUG_MODE_FORMATTED_MSG']) {
            requiredFeaturesStr = `(${requiredFeatures.toString().replace(/,/g, ', ')})`;
          } else {
            requiredFeaturesStr = `(${requiredFeatures})`;
          }
          _asyncLauncher.function_Debugger(`Didn't fetch ${package['name']} ${becuzMsg} ${requiredFeaturesStr}.\n`);
        }
        return alreadyLoadedInWindowStatus;
      } else if (alreadyInDOM(url, needle)) {
        if (needle) {
          _asyncLauncher.function_Debugger(`Didn't fetch ${package['name']} because there is a matching <script> element in the DOM (needle found in a 'src' attribute).\n(Needle: ${needle})`);
        } else {
          _asyncLauncher.function_Debugger(`Didn't fetch ${package['name']} because there is a matching <script> element in the DOM (exactly same 'src' attribute than the package URL).\n( ${url} )`);
        }
        return doNotInjectInDOMStatus;
      } else {
        async function tryFetch(package) {
          try {
            const fetchReturnedStatus = await processFetch(package);
            return fetchReturnedStatus;
          } catch (error) {
            throw error;
          }
        }

        let error = undefined;
        const max = package.options.injectionProperties['maximumPackageFetchRetry'];
        for (let retryCounter = 1; retryCounter <= max; retryCounter++) {
          try {
            await tryFetch(package);
            error = undefined;
          } catch (catchedError) {
            error = catchedError;
            await wait(package['retryFetchPackageDelay']);
          }
          if (!error) {
            resetTimer();
            break;
          } else {
            _asyncLauncher.function_Debugger(`Failed to fetch ${package['name']}. Retrying (${retryCounter}/${package.options.injectionProperties['maximumPackageFetchRetry']})`);
          }
        }

        if (error) {
          await runCallbacksCollectionSequentially(package.options.injectionProperties['errorCallbacks']);
          throw error;
        }
      }
    }

    async function injectPackageScriptInDOM(package) {
      function prepareScriptElement(injectionProperties) {
        const script = document.createElement('script');
        script.setAttribute('src', '');
        if (injectionProperties['integrity']) {
          script.integrity = injectionProperties['integrity'];
        }

        if (injectionProperties.crossOrigin) {
          script.crossOrigin = injectionProperties['crossOrigin'];
        }

        if (injectionProperties['async'] !== undefined) {
          if (injectionProperties['async']) {
            script.async = true;
          }
        } else {
          script.async = true;
        }

        if (injectionProperties['defer'] !== undefined) {
          if (injectionProperties['defer']) {
            script.defer = true;
          }
        } else {
          script.defer = true;
        }
        return script;
      }

      function getInjectInlineScriptInstance(code, injectionProperties, postInject) {
        const script = prepareScriptElement(injectionProperties);
        script.removeAttribute('src');

        const skipPostInjectCallbacks = skipPostInjectExecutionCallbacksCode(postInject);
        let postInjectExecutionCallbacksCode = '';
        if (!skipPostInjectCallbacks) {
          if (Array.isArray(postInject['postInjectExecutionCallbacks'])) {
            postInject.postInjectExecutionCallbacks.forEach(f => postInjectExecutionCallbacksCode += `${f.toString()}\n${f.name}();\n`);
          }
        }

        const plainCode = `${code}\n${postInjectExecutionCallbacksCode}`
        const inlineScript = document.createTextNode(plainCode);
        script.appendChild(inlineScript);

        if (!_asyncLauncher.obj_Config['ignorePotentialInjectionSecuritiesChecks']) {
          if (!script.outerHTML.includes(code) || (postInjectExecutionCallbacksCode !== '' && !script.outerHTML.includes(postInjectExecutionCallbacksCode))) {
            const youBlockedMeHard = document.createElement('div');
            youBlockedMeHard.classList.add('you-blocked-me-hard');
            return youBlockedMeHard;
          }
        }
        return script;
      }

      function getInjectExternalScriptInstance(url, injectionProperties) {
        const script = prepareScriptElement(injectionProperties);
        script.src = url;
        return script;
      }

      if (!_asyncLauncher.obj_Config['ignoreDOMContentLoaded']) {
        while (!_asyncLauncher['attr_DOMContentLoaded']) {
          await wait(1);
        }
        resetTimer();
      }

      let script = undefined;
      if (package.options.injectionProperties['inlineInject']) {
        script = getInjectInlineScriptInstance(package['inlineCode'], package.options['injectionProperties'], package.options['postInject']);
      } else {
        script = getInjectExternalScriptInstance(package['url'], package.options['injectionProperties']);
      }

      const injectablePackage = async (package, script) => {
        try {
          const virtualInjectedScriptInstance = await document.body.appendChild(script);
          if (virtualInjectedScriptInstance.tagName !== 'SCRIPT') {
            return false;
          }
          if (!package.options.injectionProperties['inlineInject']) {
            if (package['url'] !== script.src || virtualInjectedScriptInstance.src !== script.src) {
              return false;
            }
          } else if (virtualInjectedScriptInstance.outerHTML !== script.outerHTML) {
            return false;
          }
          return true;
        } catch {
          return false;
        }
      };

      if (!_asyncLauncher.obj_Config['ignorePotentialInjectionSecuritiesChecks']) {
        const isInjectable = await injectablePackage(package, script);
        if (!isInjectable) {
          _asyncLauncher.function_Debugger(['Failed to inject a script, here is its dump:', script]);
          await runCallbacksCollectionSequentially(package.options.injectionProperties['errorCallbacks']);
          throw new Error('Loading script in the DOM has failed!');
        }
      }
      document.body.appendChild(script);
      _asyncLauncher.function_Debugger(['Injected a script, here is its dump:', script]);
    }

    async function dlExecPackage(package) {
      function preventDlExec(pkgOptions,) {
        if (pkgOptions['killswitchOnAnyFeatureConflictPolicy']) {
          const conflictFeatureFound = anyRequiredFeatureFoundInWindow(pkgOptions['conflictFeatures']);
          if (conflictFeatureFound) {
            throw new Error(`Did not append ${package['name']}. Found a conflict feature: ${conflictFeatureFound}. Aborted.`);
          }
        } else {
          if (requiredFeaturesFoundInWindow(pkgOptions['conflictFeatures'])) {
            throw new Error(`Did not append ${package['name']}. Found ALL its conflicts features in window!`);
          }
        }
      }

      try {
        try {
          preventDlExec(package['options']);
        } catch (error) {
          throw error;
        }

        const fetchResponse = await fetchPackage(package);
        if (fetchResponse === doNotInjectInDOMStatus || fetchResponse === alreadyLoadedInWindowStatus) {
          _asyncLauncher.function_Debugger(`Didn't inject ${package['name']}.`);
        } else {
          await injectPackageScriptInDOM(package);
        }

        if (!package.options.injectionProperties['inlineInject']) {
          if (fetchResponse != alreadyLoadedInWindowStatus) {
            while (!requiredFeaturesFoundInWindow(package['requiredFeatures'])) {
              await wait(5);
              if (getTimerCurrentValue() > package.options.injectionProperties['checkRequiredFeaturesTimeout']) {
                throw new Error('Check required features timed out!');
              }
            }
            const postInject = package.options['postInject'];
            _asyncLauncher.function_Debugger(`Fully checked ${package['name']} required features in ~${getTimerCurrentValue()}ms.`);
            resetTimer();
            const skip = skipPostInjectExecutionCallbacksCode(postInject);
            if (!skip) {
              runCallbacksCollectionSequentially(package.options.postInject['postInjectExecutionCallbacks']);
              _asyncLauncher.function_Debugger(`Ran ${package['name']} post-inject payloads.`);
            }
          }
        }
      } catch (error) {
        throw error;
      }
    }

    for (const pkg of packageAndItsDependencies['dependencies']) {
      try {
        _asyncLauncher.function_Debugger(['Called dlExecPackage(Package), here is the dump of Package:', pkg]);
        await dlExecPackage(pkg);
      } catch (error) {
        throw error;
      }
    }

    try {
      _asyncLauncher.function_Debugger(['Called dlExecPackage(Package), here is the dump of Package:', packageAndItsDependencies['targetPackage']]);
      await dlExecPackage(packageAndItsDependencies['targetPackage']);
    } catch (error) {
      throw error;
    }
  }
}

Object.assign(_asyncLauncher, {
  'function_Debugger': (msg, isError = false) => {
    if (!_asyncLauncher.obj_Config['ASYNC_LAUNCHER_DEBUG_MODE']) {
      return;
    }

    if (Array.isArray(msg)) {
      console.log(`[DUMP | Mau Gallery Async Loader]`);
      for (m of msg) {
        console.log(m);
      }
    } else {
      isError ? console.error(`[DEBUG ERROR | Mau Gallery Async Loader] ${msg}`) : console.log(`[DEBUG INFO | Mau Gallery Async Loader] ${msg}`);
    }
  },

  'function_LoadMauGallery': async () => {
    function terminate() {
      _asyncLauncher = undefined;
    }

    function getBootstrapPackageObj() {
      const name = _asyncLauncher.obj_PKGData.bootstrap['name'];
      const url = _asyncLauncher.obj_PKGData.bootstrap['url'];
      const requiredFeatures = _asyncLauncher.obj_PKGData.bootstrap['requiredFeatures'];
      const options = {
        'injectionProperties': {
          'alreadyAsyncLoadedSomewhereElse': _asyncLauncher.obj_Config['boostrapIsAsyncLoadedSomewhereElseInMyCodebasePleaseDoNotAsyncLoadItHereImBeggingYou'],
          'crossOrigin': _asyncLauncher.obj_PKGData.bootstrap['crossorigin'],
          'integrity': _asyncLauncher.obj_PKGData.bootstrap['integrity']
        }
      };
      const customAsyncBootstrapTimeout = _asyncLauncher.obj_Config['customAsyncBootstrapLoadTimeout'];
      if (customAsyncBootstrapTimeout) {
        options.injectionProperties['defaultCheckRequiredFeaturesTimeout'] = customAsyncBootstrapTimeout;
      }
      return new _asyncLauncher.class_Package(name, url, requiredFeatures, options);
    }

    function getMauGalleryPackageObj() {
      const name = _asyncLauncher.obj_PKGData.mauGallery['name'];
      const url = _asyncLauncher.obj_PKGData.mauGallery['url'];
      const requiredFeatures = _asyncLauncher.obj_PKGData.mauGallery['requiredFeatures'];
      const options = {
        'injectionProperties': {
          'inlineInject': true
        },
        'postInject': {
          'postInjectExecutionCallbacks': _asyncLauncher['mauGalleryCallbacks'],
          'conflictFeatures': []
        }
      }
      return new _asyncLauncher.class_Package(name, url, requiredFeatures, options);
    }

    const boostrapPackageObj = getBootstrapPackageObj();
    const mauGalleryPackageObj = getMauGalleryPackageObj();
    const packageAndItsDependencies = new _asyncLauncher.class_PackageAndItsDependencies(mauGalleryPackageObj, [boostrapPackageObj]);
    try {
      await _asyncLauncher.function_Installer(packageAndItsDependencies);
    } catch (error) {
      const isError = true;
      _asyncLauncher.function_Debugger(error, isError);
    } finally {
      terminate();
    }
  }
});

if (!_asyncLauncher.obj_Config['ignoreDOMContentLoaded']) {
  document.addEventListener('DOMContentLoaded', () => {
    _asyncLauncher['attr_DOMContentLoaded'] = true;
  });
}

_asyncLauncher.function_LoadMauGallery();
