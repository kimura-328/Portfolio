$(window).scroll(function () {//�X�N���[������邽�тɊ֐������s
    $(".profile-content,.self-pr, .vision").each(function () {
        /*.profile-content�A.self-pr�A.vision�̊e�N���X�����v�f�ɑ΂��āA�w�肵���֐������s�B
        .each()�́A�I�������e�v�f�ɑ΂��Ċ֐������s�B
        .each()���g�p���Ȃ��ƁAjQuery�͍ŏ��̈�̗v�f�i.profile-content�A.self-pr�A.vision�N���X�����ŏ��̗v�f�j�����ɑ�����s���悤�ɂȂ�B
        ���ׂĂ̗v�f�ɑ΂��đ�����s�������ꍇ�́A.each()���g�p����*/
        var elemPos = $(this).offset().top,
        /*���݂̏������̗v�f�i.profile-content�A.self-pr�A.vision�N���X�����v�f�j
        �̏�[�̈ʒu���E�B���h�E�̏ォ��̋����Ƃ��Ď擾�B
        �����elemPos�Ƃ����ϐ��Ɋi�[����B
        .offset().top�͗v�f�̏�[�̈ʒu���擾���郁�\�b�h�B
        �܂��A�ȉ���scroll��windowHeight�𓯗l�Ɂuvar�v�Ő錾���邽�߂Ɂu,�v��������B*/
        scroll = $(window).scrollTop(),
        /*���݂̃X�N���[���ʒu���E�B���h�E�̏ォ��̋����Ƃ��Ď擾�B
        �����scroll�Ƃ����ϐ��Ɋi�[�B
        ���[�U���ǂꂾ���y�[�W���X�N���[�������������߂�B*/
        windowHeight = $(window).height();
        /*�u���E�U�̕\���̈�̍������擾�B
        windowHeight�Ƃ����ϐ��Ɋi�[�B*/
        if (scroll > elemPos - windowHeight + 200){
            /*���݂̃X�N���[���ʒu������̗v�f�̏�[�̈ʒu����E�B���h�E�̍�����
            200�s�N�Z�����������l�����傫�����ǂ����𔻒肵�Ă���B
            ���̎����^�ɂȂ�Ƃ��A����̗v�f�̏�[���E�B���h�E�̉��[����200�s�N�Z��
            ��ɗ����Ƃ��A�Ƃ������Ƃ��Ӗ�����B*/
            $(this).addClass('scrollin');
            /*���݂̗v�f�i$(this)�j��scrollin�Ƃ����N���X��ǉ�����B*/
}
});
});