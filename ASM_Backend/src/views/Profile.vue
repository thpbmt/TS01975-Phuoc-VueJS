<template>
  <div class="row justify-content-center">
    <div class="col-lg-9 col-md-11">
      <div class="card shadow mt-4">
        <!-- HEADER -->
        <div class="card-header bg-info text-white">
          <h4 class="mb-0">
            <i class="fa-solid fa-user me-2"></i>
            Thông tin cá nhân
          </h4>
        </div>

        <!-- BODY -->
        <div class="card-body">
          <div class="row">
            <!-- AVATAR -->
            <div class="col-md-4 text-center border-end">
              <img
                src="https://via.placeholder.com/150"
                class="rounded-circle mb-3"
                style="width: 150px; height: 150px; object-fit: cover"
                alt="Avatar"
              />

              <div class="mb-3">
                <input type="file" class="form-control" />
              </div>

              <span class="badge bg-success">Đang hoạt động</span>
            </div>

            <!-- FORM INFO -->
            <div class="col-md-8">
              <form>
                <!-- Họ tên -->
                <div class="mb-3">
                  <label class="form-label fw-bold">Họ và tên</label>
                  <input
                    type="text"
                    class="form-control"
                    value="Nguyễn Văn A"
                  />
                </div>

                <!-- Email -->
                <div class="mb-3">
                  <label class="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    value="vana@gmail.com"
                  />
                </div>

                <!-- Mật khẩu -->
                <div class="mb-3">
                  <label class="form-label fw-bold">Mật khẩu mới</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Nhập mật khẩu mới"
                  />
                </div>

                <!-- Xác nhận mật khẩu -->
                <div class="mb-3">
                  <label class="form-label fw-bold">Xác nhận mật khẩu</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>

                <!-- BUTTON -->
                <div class="text-end">
                  <button type="reset" class="btn btn-secondary me-2">
                    Làm mới
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Cập nhật thông tin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- FOOTER -->
        <div class="card-footer text-muted">
          <small>
            Bạn có thể cập nhật thông tin cá nhân và ảnh đại diện tại đây.
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
