<template>
    <header class="header">
        <div class="header__inner">

            <!-- Brand -->
            <div class="header__brand">
                <div class="brand-wrap">

                    <!-- Brand logo -->
                    <a href="index.html" class="brand-img stretched-link">
                        <img src="@/assets/img/logo.svg" alt="Nifty Logo" class="Nifty logo" width="16" height="16">
                    </a>


                    <!-- Brand title -->
                    <div class="brand-title">Nifty</div>


                    <!-- You can also use IMG or SVG instead of a text element. -->
                    <!--
             <div class="brand-title">
                <img src="@/assets/img/brand-title.svg" alt="Brand Title">
             </div>
             -->

                </div>
            </div>
            <!-- End - Brand -->


            <div class="header__content">

                <!-- Content Header - Left Side: -->
                <div class="header__content-start">


                    <!-- Navigation Toggler -->
                    <button type="button" class="nav-toggler header__btn btn btn-icon btn-sm" aria-label="Nav Toggler">
                        <i class="demo-psi-list-view"></i>
                    </button>

                    <div class="vr mx-1 d-none d-md-block"></div>
                </div>
                <!-- End - Content Header - Left Side -->


                <!-- Content Header - Right Side: -->
                <div class="header__content-end">


                    <!-- Mega Dropdown -->
                    <div class="dropdown">

                        <!-- Toggler -->
                        <button class="header__btn btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown"
                            data-bs-auto-close="outside" aria-label="Megamenu dropdown" aria-expanded="false">
                            <i class="demo-psi-layout-grid"></i>
                        </button>

                        <!-- Mega Dropdown Menu -->
                        <div class="dropdown-menu dropdown-menu-end p-3 mega-dropdown">
                            <div class="row">
                                <div class="col-md-6">
                                    <!-- Pages List Group -->
                                    <div class="list-group list-group-borderless">
                                        <div class="list-group-item d-flex align-items-center border-bottom mb-2">
                                            <div class="flex-shrink-0 me-2">
                                                <i class="demo-pli-file fs-4"></i>
                                            </div>
                                            <h5 class="flex-grow-1 m-0">Pages</h5>
                                        </div>
                                        <a href="#" class="list-group-item list-group-item-action">Profile</a>
                                        <a href="#" class="list-group-item list-group-item-action">Search Result</a>
                                        <a href="#" class="list-group-item list-group-item-action">FAQ</a>
                                        <a href="#" class="list-group-item list-group-item-action">Screen Lock</a>
                                        <a href="#" class="list-group-item list-group-item-action">Maintenance</a>
                                        <a href="#" class="list-group-item list-group-item-action">Invoices</a>
                                        <a href="#" class="list-group-item list-group-item-action disabled"
                                            tabindex="-1" aria-disabled="true">Disabled Item</a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!-- Mailbox list group -->
                                    <div class="list-group list-group-borderless mb-3">
                                        <div class="list-group-item d-flex align-items-center border-bottom mb-2">
                                            <div class="flex-shrink-0 me-2">
                                                <i class="demo-pli-mail fs-4"></i>
                                            </div>
                                            <h5 class="flex-grow-1 m-0">Mailbox</h5>
                                        </div>
                                        <a href="#"
                                            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                            Inbox <span class="badge bg-danger rounded-pill">14</span>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">Read Messages</a>
                                        <a href="#" class="list-group-item list-group-item-action">Compose</a>
                                        <a href="#" class="list-group-item list-group-item-action">Template</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End - Mega Dropdown -->


                    <!-- Notification Dropdown -->
                    <div class="dropdown">

                        <!-- Toggler -->
                        <button class="header__btn btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown"
                            aria-label="Notification dropdown" aria-expanded="false">
                            <span class="d-block position-relative">
                                <i class="demo-psi-bell"></i>

                                <span class="badge badge-super rounded-pill bg-danger p-1">
                                    <span class="visually-hidden">unread messages</span>
                                </span>

                                <!-- Set custom notification count -->
                                <!--
                      <span class="badge badge-super rounded-pill bg-danger p-1">
                           19<span class="visually-hidden">unread messages</span>
                      </span>
                      -->

                            </span>
                        </button>


                        <!-- Notification dropdown menu -->
                        <div class="dropdown-menu dropdown-menu-end w-md-300px">
                            <div class="border-bottom px-3 py-2 mb-3">
                                <h5>Notifications</h5>
                            </div>


                            <div class="list-group list-group-borderless">


                                <!-- List item -->
                                <div class="list-group-item list-group-item-action d-flex align-items-center mb-3">
                                    <div class="flex-shrink-0 me-3">
                                        <i class="demo-psi-data-settings text-danger fs-2"></i>
                                    </div>
                                    <div class="flex-grow-1">
                                        <a href="#"
                                            class="h6 fw-normal d-block mb-0 stretched-link text-decoration-none">Your
                                            storage is full</a>
                                        <small class="text-body-secondary">Local storage is nearly full.</small>
                                    </div>
                                </div>


                                <!-- List item -->
                                <div class="list-group-item list-group-item-action d-flex align-items-center mb-3">
                                    <div class="flex-shrink-0 me-3">
                                        <i class="demo-psi-pen-5 text-info fs-2"></i>
                                    </div>
                                    <div class="flex-grow-1">
                                        <a href="#"
                                            class="h6 fw-normal d-block mb-0 stretched-link text-decoration-none">Writing
                                            a New Article</a>
                                        <small class="text-body-secondary">Wrote a news article for the John
                                            Mike</small>
                                    </div>
                                </div>


                                <!-- List item -->
                                <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                    <div class="flex-shrink-0 me-3">
                                        <i class="demo-psi-speech-bubble-3 text-success fs-2"></i>
                                    </div>
                                    <div class="flex-grow-1">
                                        <div class="d-flex justify-content-between align-items-start">
                                            <a href="#"
                                                class="h6 fw-normal mb-0 stretched-link text-decoration-none">Comment
                                                sorting</a>
                                            <span class="badge bg-info rounded ms-auto">NEW</span>
                                        </div>
                                        <small class="text-body-secondary">You have 1,256 unsorted comments.</small>
                                    </div>
                                </div>


                                <!-- List item -->
                                <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                    <div class="flex-shrink-0 me-3">
                                        <img class="img-xs rounded-circle" src="@/assets/img/profile-photos/7.png"
                                            alt="Profile Picture" loading="lazy">
                                    </div>
                                    <div class="flex-grow-1">
                                        <a href="#"
                                            class="h6 fw-normal d-block mb-0 stretched-link text-decoration-none">Lucy
                                            Sent you a message</a>
                                        <small class="text-body-secondary">30 minutes ago</small>
                                    </div>
                                </div>


                                <!-- List item -->
                                <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                                    <div class="flex-shrink-0 me-3">
                                        <img class="img-xs rounded-circle" src="@/assets/img/profile-photos/3.png"
                                            alt="Profile Picture" loading="lazy">
                                    </div>
                                    <div class="flex-grow-1">
                                        <a href="#"
                                            class="h6 fw-normal d-block mb-0 stretched-link text-decoration-none">Jackson
                                            Sent you a message</a>
                                        <small class="text-body-secondary">1 hours ago</small>
                                    </div>
                                </div>

                                <div class="text-center mb-2">
                                    <a href="#" class="btn-link text-primary icon-link icon-link-hover">
                                        Show all Notifications
                                        <i class="bi demo-psi-arrow-out-right"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- End - Notification dropdown -->


                    <!-- User dropdown -->
                    <div class="dropdown">

                        <!-- Toggler -->
                        <button class="header__btn btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown"
                            aria-label="User dropdown" aria-expanded="false">
                            <i class="demo-psi-male"></i>
                        </button>


                        <!-- User dropdown menu -->
                        <div class="dropdown-menu dropdown-menu-end w-md-450px">

                            <!-- User dropdown header -->
                            <div class="d-flex align-items-center border-bottom px-3 py-2">
                                <div class="flex-shrink-0">
                                    <img class="img-sm rounded-circle" src="@/assets/img/profile-photos/4.png"
                                        alt="Profile Picture" loading="lazy">
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5 class="mb-0">Aaron Chavez</h5>
                                    <span class="text-body-secondary fst-italic">aaron_chavez@example.com</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-7">

                                    <!-- Simple widget and reports -->
                                    <div class="list-group list-group-borderless mb-3">
                                        <div class="list-group-item text-center border-bottom mb-3">
                                            <p class="h1 display-1 text-primary fw-semibold">17</p>
                                            <p class="h6 mb-0"><i class="demo-pli-basket-coins fs-3 me-2"></i> New
                                                orders</p>
                                            <small class="text-body-secondary">You have new orders</small>
                                        </div>
                                        <div
                                            class="list-group-item py-0 d-flex justify-content-between align-items-center">
                                            Today Earning
                                            <small class="fw-bolder">$578</small>
                                        </div>
                                        <div
                                            class="list-group-item py-0 d-flex justify-content-between align-items-center">
                                            Tax
                                            <small class="fw-bolder text-danger">- $28</small>
                                        </div>
                                        <div
                                            class="list-group-item py-0 d-flex justify-content-between align-items-center">
                                            Total Earning
                                            <span class="fw-bolder text-body-emphasis">$6,578</span>
                                        </div>
                                    </div>


                                </div>
                                <div class="col-md-5">

                                    <!-- User menu link -->
                                    <div class="list-group list-group-borderless h-100 py-3">
                                        <a href="#"
                                            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                            <span><i class="demo-pli-mail fs-5 me-2"></i> Messages</span>
                                            <span class="badge bg-danger rounded-pill">14</span>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <i class="demo-pli-male fs-5 me-2"></i> Profile
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <i class="demo-pli-gear fs-5 me-2"></i> Settings
                                        </a>

                                        <a href="#" class="list-group-item list-group-item-action mt-auto">
                                            <i class="demo-pli-computer-secure fs-5 me-2"></i> Lock screen
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <i class="demo-pli-unlock fs-5 me-2"></i> Logout
                                        </a>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- End - User dropdown -->


                    <div class="vr mx-1 d-none d-md-block"></div>

                    <div class="form-check form-check-alt form-switch mx-md-2">
                        <input id="headerThemeToggler" class="form-check-input mode-switcher" type="checkbox"
                            role="switch">
                        <label class="form-check-label ps-1 fw-bold d-none d-md-flex align-items-center "
                            for="headerThemeToggler">
                            <i class="mode-switcher-icon icon-light demo-psi-sun fs-5"></i>
                            <i class="mode-switcher-icon icon-dark d-none demo-psi-half-moon"></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>