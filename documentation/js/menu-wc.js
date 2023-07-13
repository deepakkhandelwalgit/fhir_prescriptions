'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">fhir_prescriptions documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-0b467755445fad724eefe3bc41a7efed19890e400c3b99f16367393b967a9509ee87b1bbcf338ba5db4f2f373e3158af6b95a17ddcd99e74d204664bdebd1bb9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0b467755445fad724eefe3bc41a7efed19890e400c3b99f16367393b967a9509ee87b1bbcf338ba5db4f2f373e3158af6b95a17ddcd99e74d204664bdebd1bb9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0b467755445fad724eefe3bc41a7efed19890e400c3b99f16367393b967a9509ee87b1bbcf338ba5db4f2f373e3158af6b95a17ddcd99e74d204664bdebd1bb9"' :
                                            'id="xs-controllers-links-module-AppModule-0b467755445fad724eefe3bc41a7efed19890e400c3b99f16367393b967a9509ee87b1bbcf338ba5db4f2f373e3158af6b95a17ddcd99e74d204664bdebd1bb9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0b467755445fad724eefe3bc41a7efed19890e400c3b99f16367393b967a9509ee87b1bbcf338ba5db4f2f373e3158af6b95a17ddcd99e74d204664bdebd1bb9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0b467755445fad724eefe3bc41a7efed19890e400c3b99f16367393b967a9509ee87b1bbcf338ba5db4f2f373e3158af6b95a17ddcd99e74d204664bdebd1bb9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0b467755445fad724eefe3bc41a7efed19890e400c3b99f16367393b967a9509ee87b1bbcf338ba5db4f2f373e3158af6b95a17ddcd99e74d204664bdebd1bb9"' :
                                        'id="xs-injectables-links-module-AppModule-0b467755445fad724eefe3bc41a7efed19890e400c3b99f16367393b967a9509ee87b1bbcf338ba5db4f2f373e3158af6b95a17ddcd99e74d204664bdebd1bb9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrescriptionsModule.html" data-type="entity-link" >PrescriptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PrescriptionsModule-82b684cd718790f24c0c558d26f4ca16da516fa7ed3debed6ec7f6cf978f8459b472c4b8d49cbbfee07932621cc91eea3d87e827962435bdea06d7d633a0094d"' : 'data-bs-target="#xs-controllers-links-module-PrescriptionsModule-82b684cd718790f24c0c558d26f4ca16da516fa7ed3debed6ec7f6cf978f8459b472c4b8d49cbbfee07932621cc91eea3d87e827962435bdea06d7d633a0094d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PrescriptionsModule-82b684cd718790f24c0c558d26f4ca16da516fa7ed3debed6ec7f6cf978f8459b472c4b8d49cbbfee07932621cc91eea3d87e827962435bdea06d7d633a0094d"' :
                                            'id="xs-controllers-links-module-PrescriptionsModule-82b684cd718790f24c0c558d26f4ca16da516fa7ed3debed6ec7f6cf978f8459b472c4b8d49cbbfee07932621cc91eea3d87e827962435bdea06d7d633a0094d"' }>
                                            <li class="link">
                                                <a href="controllers/PrescriptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrescriptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrescriptionsModule-82b684cd718790f24c0c558d26f4ca16da516fa7ed3debed6ec7f6cf978f8459b472c4b8d49cbbfee07932621cc91eea3d87e827962435bdea06d7d633a0094d"' : 'data-bs-target="#xs-injectables-links-module-PrescriptionsModule-82b684cd718790f24c0c558d26f4ca16da516fa7ed3debed6ec7f6cf978f8459b472c4b8d49cbbfee07932621cc91eea3d87e827962435bdea06d7d633a0094d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrescriptionsModule-82b684cd718790f24c0c558d26f4ca16da516fa7ed3debed6ec7f6cf978f8459b472c4b8d49cbbfee07932621cc91eea3d87e827962435bdea06d7d633a0094d"' :
                                        'id="xs-injectables-links-module-PrescriptionsModule-82b684cd718790f24c0c558d26f4ca16da516fa7ed3debed6ec7f6cf978f8459b472c4b8d49cbbfee07932621cc91eea3d87e827962435bdea06d7d633a0094d"' }>
                                        <li class="link">
                                            <a href="injectables/PrescriptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrescriptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-13964bad986f6c98c21b531f01805935b364a0033b26460b26d1aa29b3ccd4f7c81577672f5d732d2afa54b68d67607de7fa8960e138b2fe3b061268b290a21c"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-13964bad986f6c98c21b531f01805935b364a0033b26460b26d1aa29b3ccd4f7c81577672f5d732d2afa54b68d67607de7fa8960e138b2fe3b061268b290a21c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-13964bad986f6c98c21b531f01805935b364a0033b26460b26d1aa29b3ccd4f7c81577672f5d732d2afa54b68d67607de7fa8960e138b2fe3b061268b290a21c"' :
                                            'id="xs-controllers-links-module-UsersModule-13964bad986f6c98c21b531f01805935b364a0033b26460b26d1aa29b3ccd4f7c81577672f5d732d2afa54b68d67607de7fa8960e138b2fe3b061268b290a21c"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-13964bad986f6c98c21b531f01805935b364a0033b26460b26d1aa29b3ccd4f7c81577672f5d732d2afa54b68d67607de7fa8960e138b2fe3b061268b290a21c"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-13964bad986f6c98c21b531f01805935b364a0033b26460b26d1aa29b3ccd4f7c81577672f5d732d2afa54b68d67607de7fa8960e138b2fe3b061268b290a21c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-13964bad986f6c98c21b531f01805935b364a0033b26460b26d1aa29b3ccd4f7c81577672f5d732d2afa54b68d67607de7fa8960e138b2fe3b061268b290a21c"' :
                                        'id="xs-injectables-links-module-UsersModule-13964bad986f6c98c21b531f01805935b364a0033b26460b26d1aa29b3ccd4f7c81577672f5d732d2afa54b68d67607de7fa8960e138b2fe3b061268b290a21c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Prescription.html" data-type="entity-link" >Prescription</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePrescriptionDto.html" data-type="entity-link" >CreatePrescriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPrescriptionDto.html" data-type="entity-link" >GetPrescriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MedicationDto.html" data-type="entity-link" >MedicationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MedicationDto-1.html" data-type="entity-link" >MedicationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MedicationDto-2.html" data-type="entity-link" >MedicationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDto.html" data-type="entity-link" >PatientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDto-1.html" data-type="entity-link" >PatientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrescriptionDto.html" data-type="entity-link" >PrescriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SerializeInterceptor.html" data-type="entity-link" >SerializeInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePrescriptionDto.html" data-type="entity-link" >UpdatePrescriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CurrentUserInterceptor.html" data-type="entity-link" >CurrentUserInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrentUserMiddleware.html" data-type="entity-link" >CurrentUserMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClassConstructor.html" data-type="entity-link" >ClassConstructor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Request.html" data-type="entity-link" >Request</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});