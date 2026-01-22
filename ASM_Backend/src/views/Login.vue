<template>
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-5">
      <div class="card shadow mt-5">
        <!-- HEADER -->
        <div class="card-header bg-dark text-white text-center">
          <h4 class="mb-0">Đăng nhập</h4>
        </div>

        <!-- BODY -->
        <div class="card-body">
          <form>
            <!-- Email -->
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Nhập email"
              />
            </div>

            <!-- Mật khẩu -->
            <div class="mb-3">
              <label class="form-label">Mật khẩu</label>
              <input
                type="password"
                class="form-control"
                placeholder="Nhập mật khẩu"
              />
            </div>

            <!-- Ghi nhớ -->
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">
                Ghi nhớ đăng nhập
              </label>
            </div>

            <!-- Button -->
            <button type="submit" class="btn btn-primary w-100">
              Đăng nhập
            </button>
          </form>
        </div>

        <!-- FOOTER -->
        <div class="card-footer text-center">
          <small class="d-block">
            Quên mật khẩu?
            <span class="text-danger">Khôi phục</span>
          </small>
          <small>
            Chưa có tài khoản?
            <span class="text-success">Đăng ký</span>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
