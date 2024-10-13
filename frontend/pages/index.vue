<template>
    <div class="content__header content__boxed rounded-0">
        <div class="content__wrap">
            <!-- Page title and information -->
            <h1 class="page-title mb-2">Dashboard</h1>
            <h2 class="h5">Welcome back to the Dashboard.</h2>
            <p>Scroll down to see quick links and overviews of your Server, To do list<br> Order status or get
                some Help using Nifty.</p>
            <!-- END : Page title and information -->
        </div>
    </div>

    <div class="bg-body-secondary bg-opacity-50 my-3 pt-3">
        <div class="content__boxed">
            <div class="content__wrap">

                <div class="row gx-5 gy-5 gy-md-0">
                    <div class="col-md-4">


                        <!-- TODO List -->
                        <h4 class="mb-3">To-do list</h4>
                        <ul class="list-group list-group-borderless">
                            <li class="list-group-item px-0">
                                <div class="form-check ">
                                    <input id="_dm-todoList1" class="form-check-input" type="checkbox" checked>
                                    <label for="_dm-todoList1" class="form-check-label text-decoration-line-through">
                                        Find an idea <span
                                            class="badge bg-danger text-decoration-line-through">Important</span>
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item px-0">
                                <div class="form-check">
                                    <input id="_dm-todoList2" class="form-check-input" type="checkbox">
                                    <label for="_dm-todoList2" class="form-check-label">
                                        Do some work
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item px-0">
                                <div class="form-check">
                                    <input id="_dm-todoList3" class="form-check-input" type="checkbox">
                                    <label for="_dm-todoList3" class="form-check-label">
                                        Read the book
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item px-0">
                                <div class="form-check">
                                    <input id="_dm-todoList4" class="form-check-input" type="checkbox">
                                    <label for="_dm-todoList4" class="form-check-label">
                                        Upgrade server <span class="badge bg-warning">Warning</span>
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item px-0">
                                <div class="form-check">
                                    <input id="_dm-todoList5" class="form-check-input" type="checkbox">
                                    <label for="_dm-todoList5" class="form-check-label">
                                        Redesign my logo <span class="badge bg-info">2 Mins</span>
                                    </label>
                                </div>
                            </li>
                        </ul>

                        <div class="input-group mt-3">
                            <input type="text" class="form-control form-control-sm" placeholder="Add new list"
                                aria-label="Add new list" aria-describedby="button-addon">
                            <button id="button-addon" class="btn btn-sm btn-secondary hstack gap-2" type="button">
                                <i class="demo-psi-add text-dark text-opacity-40 fs-4"></i>
                                <span class="vr"></span>
                                Add New
                            </button>
                        </div>
                        <!-- END : TODO List -->


                    </div>
                    <div class="col-md-4">


                        <!-- Service options -->
                        <h4 class="mb-3">Services</h4>
                        <div class="list-group list-group-borderless">
                            <div class="list-group-item px-0 mb-2">
                                <div class="d-flex justify-content-between">
                                    <label class="form-check-label h5 mb-0" for="_dm-dbPersonalStatus">Show my
                                        personal status</label>
                                    <div class="form-check form-switch">
                                        <input id="_dm-dbPersonalStatus" class="form-check-input" type="checkbox"
                                            checked>
                                    </div>
                                </div>
                                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
                            </div>

                            <div class="list-group-item px-0 mb-2">
                                <div class="d-flex justify-content-between">
                                    <label class="form-check-label h5 mb-0" for="_dm-dbOfflineContact">Show
                                        offline contact</label>
                                    <div class="form-check form-switch">
                                        <input id="_dm-dbOfflineContact" class="form-check-input" type="checkbox">
                                    </div>
                                </div>
                                <span>Aenean commodo ligula eget dolor. Aenean massa.</span>
                            </div>

                            <div class="list-group-item px-0 mb-2">
                                <div class="d-flex justify-content-between">
                                    <label class="form-check-label h5 mb-0" for="_dm-dbMuteNotifications">Mute
                                        notifications</label>
                                    <div class="form-check form-switch">
                                        <input id="_dm-dbMuteNotifications" class="form-check-input" type="checkbox">
                                    </div>
                                </div>
                                <span>Aenean commodo ligula eget dolor. Aenean massa.</span>
                            </div>

                            <div class="list-group-item px-0 mb-2">
                                <div class="d-flex justify-content-between">
                                    <label class="form-check-label h5 mb-0" for="_dm-dbInvisibleMode">Invisible
                                        Mode</label>
                                    <div class="form-check form-switch">
                                        <input id="_dm-dbInvisibleMode" class="form-check-input" type="checkbox"
                                            checked>
                                    </div>
                                </div>
                                <span>Nascetur ridiculus mus.</span>
                            </div>
                        </div>
                        <!-- END : Service options -->


                    </div>
                    <div class="col-md-4">

                        <!-- User quote  -->
                        <div class="d-flex align-items-center position-relative hv-grow-parent hv-outline-parent">
                            <div class="flex-shrink-0">
                                <img class="hv-gc hv-oc img-lg rounded-circle" src="@/assets/img/profile-photos/8.png"
                                    alt="Profile Picture" loading="lazy">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <a href="#"
                                    class="d-block stretched-link h5 link-offset-2-hover text-decoration-none link-underline-hover mb-0">Kathryn
                                    Obrien</a>
                                Project manager
                            </div>
                        </div>

                        <figure class="d-flex flex-column align-items-center justify-content-center my-4">
                            <blockquote class="blockquote mb-0">
                                <p class="quote">Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed
                                    diam nonummy nibh euismod tincidunt</p>
                            </blockquote>
                        </figure>

                        <div class="border-top pt-3">
                            <a href="#" class="btn btn-icon btn-link text-indigo" aria-label="Facebook button">
                                <i class="demo-psi-facebook fs-4"></i>
                            </a>
                            <a href="#" class="btn btn-icon btn-link text-info" aria-label="Twitter button">
                                <i class="demo-psi-twitter fs-4"></i>
                            </a>
                            <a href="#" class="btn btn-icon btn-link text-red" aria-label="Google plus button">
                                <i class="demo-psi-google-plus fs-4"></i>
                            </a>
                            <a href="#" class="btn btn-icon btn-link text-orange" aria-label="Instagram button">
                                <i class="demo-psi-instagram fs-4"></i>
                            </a>
                        </div>
                        <!-- END : User quote  -->


                    </div>
                </div>


            </div>
        </div>
    </div>


    <div class="content__boxed">
        <div class="content__wrap">


            <!-- Table with toolbar -->
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-3">Order Status</h5>
                    <div class="row">

                        <!-- Left toolbar -->
                        <div class="col-md-6 d-flex gap-1 align-items-center mb-3">
                            <button class="btn btn-primary hstack gap-2">
                                <i class="demo-psi-add fs-5"></i>
                                <span class="vr"></span>
                                Add New
                            </button>
                            <button class="btn btn-icon btn-outline-light" aria-label="Print table">
                                <i class="demo-pli-printer fs-5"></i>
                            </button>
                            <div class="btn-group">
                                <button class="btn btn-icon btn-outline-light" aria-label="Information"><i
                                        class="demo-pli-exclamation fs-5"></i></button>
                                <button class="btn btn-icon btn-outline-light" aria-label="Remove"><i
                                        class="demo-pli-recycling fs-5"></i></button>
                            </div>
                        </div>
                        <!-- END : Left toolbar -->

                        <!-- Right Toolbar -->
                        <div class="col-md-6 d-flex gap-1 align-items-center justify-content-md-end mb-3">
                            <div class="form-group">
                                <input type="text" placeholder="Search..." class="form-control" autocomplete="off">
                            </div>
                            <div class="btn-group">
                                <button class="btn btn-icon btn-outline-light" aria-label="Download"><i
                                        class="demo-pli-download-from-cloud fs-5"></i></button>
                                <div class="btn-group dropdown">
                                    <button class="btn btn-icons btn-outline-light dropdown-toggle hstack gap-2"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Options
                                        <span class="vr"></span>
                                        <span class="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- END : Right Toolbar -->

                    </div>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Invoice</th>
                                    <th>User</th>
                                    <th>Order date</th>
                                    <th>Amount</th>
                                    <th class="text-center">Status</th>
                                    <th class="text-center">Tracking Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="#" class="btn-link"> Order #53431</a></td>
                                    <td>Steve N. Horton</td>
                                    <td><span class="text-body"><i class="demo-pli-clock"></i> May 22,
                                            2024</span></td>
                                    <td>$45.00</td>
                                    <td class="text-center fs-5">
                                        <div class="d-block badge bg-success">Paid</div>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td><a href="#" class="btn-link"> Order #53432</a></td>
                                    <td>Charles S Boyle</td>
                                    <td><span class="text-body"><i class="demo-pli-clock"></i> May 24,
                                            2024</span></td>
                                    <td>$245.30</td>
                                    <td class="text-center fs-5">
                                        <div class="d-block badge bg-info">Shipped</div>
                                    </td>
                                    <td class="text-center">CGX0089734531</td>
                                </tr>
                                <tr>
                                    <td><a href="#" class="btn-link"> Order #53433</a></td>
                                    <td>Lucy Doe</td>
                                    <td><span class="text-body"><i class="demo-pli-clock"></i> May 24,
                                            2024</span></td>
                                    <td>$38.00</td>
                                    <td class="text-center fs-5">
                                        <div class="d-block badge bg-info">Shipped</div>
                                    </td>
                                    <td class="text-center">CGX0089934571</td>
                                </tr>
                                <tr>
                                    <td><a href="#" class="btn-link"> Order #53434</a></td>
                                    <td>Teresa L. Doe</td>
                                    <td><span class="text-body"><i class="demo-pli-clock"></i> May 15,
                                            2024</span></td>
                                    <td>$77.99</td>
                                    <td class="text-center fs-5">
                                        <div class="d-block badge bg-info">Shipped</div>
                                    </td>
                                    <td class="text-center">CGX0089734574</td>
                                </tr>
                                <tr>
                                    <td><a href="#" class="btn-link"> Order #53435</a></td>
                                    <td>Teresa L. Doe</td>
                                    <td><span class="text-body"><i class="demo-pli-clock"></i> May 12,
                                            2024</span></td>
                                    <td>$18.00</td>
                                    <td class="text-center fs-5">
                                        <div class="d-block badge bg-success">Paid</div>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td><a href="#" class="btn-link">Order #53437</a></td>
                                    <td>Charles S Boyle</td>
                                    <td><span class="text-body"><i class="demo-pli-clock"></i> May 17,
                                            2024</span></td>
                                    <td>$658.00</td>
                                    <td class="text-center fs-5">
                                        <div class="d-block badge bg-danger">Refunded</div>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td><a href="#" class="btn-link">Order #536584</a></td>
                                    <td>Scott S. Calabrese</td>
                                    <td><span class="text-body"><i class="demo-pli-clock"></i> May 19,
                                            2024</span></td>
                                    <td>$45.58</td>
                                    <td class="text-center fs-5">
                                        <div class="d-block badge bg-warning">Unpaid</div>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <nav class="text-align-center mt-5" aria-label="Table navigation">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link" href="#">Previous</a>
                            </li>
                            <li class="page-item active" aria-current="page">
                                <span class="page-link">1</span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- END : Table with toolbar -->
        </div>
    </div>
</template>

<script setup></script>

<style></style>