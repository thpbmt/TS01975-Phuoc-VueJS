<template>
  <div class="row justify-content-center">
    <div class="col-lg-8 col-md-10">
      <div class="card shadow mt-4">
        <!-- HEADER -->
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">
            <i class="fa-solid fa-pen-to-square me-2"></i>
            Đăng bài viết mới
          </h4>
        </div>

        <!-- BODY -->
        <div class="card-body">
          <form>
            <!-- Tiêu đề -->
            <div class="mb-3">
              <label class="form-label fw-bold">Tiêu đề bài viết</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nhập tiêu đề bài viết"
              />
            </div>

            <!-- Danh mục -->
            <div class="mb-3">
              <label class="form-label fw-bold">Danh mục</label>
              <select class="form-select">
                <option>Chọn danh mục</option>
                <option>Bài viết</option>
                <option>Video</option>
                <option>Sự kiện</option>
                <option>Chia sẻ</option>
              </select>
            </div>

            <!-- Hình ảnh -->
            <div class="mb-3">
              <label class="form-label fw-bold">Hình ảnh minh họa</label>
              <input type="file" class="form-control" />
            </div>

            <!-- Nội dung -->
            <div class="mb-3">
              <label class="form-label fw-bold">Nội dung bài viết</label>
              <textarea
                class="form-control"
                rows="6"
                placeholder="Nhập nội dung bài viết..."
              ></textarea>
            </div>

            <!-- Trạng thái -->
            <div class="mb-3">
              <label class="form-label fw-bold">Trạng thái</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="status" />
                <label class="form-check-label">Công khai</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="status" />
                <label class="form-check-label">Nháp</label>
              </div>
            </div>

            <!-- BUTTON -->
            <div class="text-end">
              <button type="reset" class="btn btn-secondary me-2">
                Làm mới
              </button>
              <button type="submit" class="btn btn-success">
                Đăng bài
              </button>
            </div>
          </form>
        </div>

        <!-- FOOTER -->
        <div class="card-footer text-muted">
          <small>
            Lưu ý: Nội dung bài viết phải tuân thủ quy định của hệ thống.
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
