<template>
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-5">
      <div class="card shadow mt-4">
        <div class="card-header bg-dark text-white text-center">
          <h4 class="mb-0">Đăng ký tài khoản</h4>
        </div>

        <div class="card-body">
          <form>
            <!-- Họ tên -->
            <div class="mb-3">
              <label class="form-label">Họ và tên</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nhập họ và tên"
              />
            </div>

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

            <!-- Xác nhận mật khẩu -->
            <div class="mb-3">
              <label class="form-label">Xác nhận mật khẩu</label>
              <input
                type="password"
                class="form-control"
                placeholder="Nhập lại mật khẩu"
              />
            </div>

            <!-- Giới tính -->
            <div class="mb-3">
              <label class="form-label">Giới tính</label>
              <select class="form-select">
                <option>Nam</option>
                <option>Nữ</option>
                <option>Khác</option>
              </select>
            </div>

            <!-- Điều khoản -->
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">
                Tôi đồng ý với điều khoản sử dụng
              </label>
            </div>

            <!-- Button -->
            <button type="submit" class="btn btn-success w-100">
              Đăng ký
            </button>
          </form>
        </div>

        <div class="card-footer text-center">
          <small>
            Đã có tài khoản?
            <span class="text-primary">Đăng nhập</span>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
